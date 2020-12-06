import { BigInt, Address } from "@graphprotocol/graph-ts"
import {
  usdt,
  Issue,
  Redeem,
  DestroyedBlackFunds,
  AddedBlackList,
  RemovedBlackList,
  Approval,
  Transfer,

} from "../generated/usdt/usdt"
import { client,issuance, redeem, approval, blackFundsDestroy, transfer  } from "../generated/schema"

export function handleIssue(event: Issue): void {
  let entity = issuance.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new issuance(event.transaction.hash.toHex())
  }
  entity.amount=event.params.amount
  entity.save()
}

export function handleRedeem(event: Redeem): void {
  let entity = redeem.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new redeem(event.transaction.hash.toHex())
  }
  entity.amount=event.params.amount
  entity.save()
}

export function handleDestroyedBlackFunds(event: DestroyedBlackFunds): void {
  let entity = blackFundsDestroy.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new blackFundsDestroy(event.transaction.hash.toHex())
  }
  let user=load_or_create_client(event.params._blackListedUser)
  entity.amount=event.params._balance
  entity.client=user.id
  entity.save()
}

export function handleAddedBlackList(event: AddedBlackList): void {
  let Client=load_or_create_client(event.params._user)
  Client.blacklisted=true
  Client.save()

}

export function handleRemovedBlackList(event: RemovedBlackList): void {
  let Client=load_or_create_client(event.params._user)
  Client.blacklisted=false
  Client.save()
}

export function handleApproval(event: Approval): void {
  let own=load_or_create_client(event.params.owner)
  let spender=load_or_create_client(event.params.owner)
  let entity = approval.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new approval(event.transaction.hash.toHex())
  }
  entity.owner=own.id
  entity.spender=spender.id
  entity.value=event.params.value
  entity.save()
}

export function handleTransfer(event: Transfer): void {
  let sender = load_or_create_client(event.params.from)
  sender.transferscount=sender.transferscount+BigInt.fromI32(1)
  sender.save()
  let reciever = load_or_create_client(event.params.to)
  let entity = transfer.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new transfer(event.transaction.hash.toHex())
  }
  entity.amount=event.params.value
  entity.from=sender.id
  entity.to=reciever.id
  entity.timestamp=event.block.timestamp
  entity.save()
}




export function load_or_create_client(address: Address): client {
  let Client = client.load(address.toHexString())
  if (Client == null) {
    Client = new client(address.toHexString())
    Client.blacklisted=false
    Client.transferscount=BigInt.fromI32(0)
    Client.save();
  }
  return Client as client;
}

