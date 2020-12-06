import { BigInt } from "@graphprotocol/graph-ts"
import {
  usdt,
  Issue,
  Redeem,
  Deprecate,
  Params,
  DestroyedBlackFunds,
  AddedBlackList,
  RemovedBlackList,
  Approval,
  Transfer,
  Pause,
  Unpause
} from "../generated/usdt/usdt"
import { issuet, redeemt, deprecatet, paramst, destroyedblackfundst, addedblacklistt, removedblacklistt, approvalt, transfert, pauset, unpauset,  } from "../generated/schema"


export function handleIssue(event: Issue): void {
  let entity = issuet.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new issuet(event.transaction.hash.toHex())
  }
  entity.save()
}

export function handleRedeem(event: Redeem): void {
  let entity = redeemt.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new redeemt(event.transaction.hash.toHex())
  }
  entity.save()
}

export function handleDeprecate(event: Deprecate): void {
  let entity = deprecatet.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new deprecatet(event.transaction.hash.toHex())
  }
  entity.save()
}

export function handleParams(event: Params): void {
  let entity = paramst.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new paramst(event.transaction.hash.toHex())
  }
  entity.save()
}

export function handleDestroyedBlackFunds(event: DestroyedBlackFunds): void {
  let entity = destroyedblackfundst.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new destroyedblackfundst(event.transaction.hash.toHex())
  }
  entity.save()
}

export function handleAddedBlackList(event: AddedBlackList): void {
  let entity = addedblacklistt.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new addedblacklistt(event.transaction.hash.toHex())
  }
  entity.save()
}

export function handleRemovedBlackList(event: RemovedBlackList): void {
  let entity = removedblacklistt.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new removedblacklistt(event.transaction.hash.toHex())
  }
  entity.save()
}

export function handleApproval(event: Approval): void {
  let entity = approvalt.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new approvalt(event.transaction.hash.toHex())
  }
  entity.save()
}

export function handleTransfer(event: Transfer): void {
  let entity = transfert.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new transfert(event.transaction.hash.toHex())
  }
  entity.save()
}

export function handlePause(event: Pause): void {
  let entity = pauset.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new pauset(event.transaction.hash.toHex())
  }
  entity.save()
}

export function handleUnpause(event: Unpause): void {
  let entity = unpauset.load(event.transaction.hash.toHex())
  if (entity == null) {
    entity = new unpauset(event.transaction.hash.toHex())
  }
  entity.save()
}

// - contract.name(...)
// - contract.deprecated(...)
// - contract.totalSupply(...)
// - contract.upgradedAddress(...)
// - contract.balances(...)
// - contract.decimals(...)
// - contract.maximumFee(...)
// - contract._totalSupply(...)
// - contract.getBlackListStatus(...)
// - contract.allowed(...)
// - contract.paused(...)
// - contract.balanceOf(...)
// - contract.getOwner(...)
// - contract.owner(...)
// - contract.symbol(...)
// - contract.allowance(...)
// - contract.basisPointsRate(...)
// - contract.isBlackListed(...)
// - contract.MAX_UINT(...)