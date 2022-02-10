// import {Coordinator} from '../../coordinator/entities/coordinator.entity'
// import {Benefactor} from '../../benefactor/entities/benefactor.entity'
// import {Beneficiary} from '../../beneficiary/entities/beneficiary.entity'
// import {Campaign} from '../../campaign/entities/campaign.entity'
// import {InfoRequest} from '../../infoRequest/entities/infoRequest.entity'
// import {Supporter} from '../../supporter/entities/supporter.entity'
// import {Donation} from '../../donation/entities/donation.entity'
// import {RecurringDonation} from '../../recurringDonation/entities/recurringDonation.entity'
// import {Transfer} from '../../transfer/entities/transfer.entity'
// import {Withdrawal} from '../../withdrawal/entities/withdrawal.entity'
// import {Expense} from '../../expense/entities/expense.entity'
// import {Document} from '../../document/entities/document.entity'

export class Person {
  id: string
  firstName: string
  lastName: string
  email: string
  emailConfirmed: boolean | null
  phone: string | null
  company: string | null
  createdAt: Date
  updatedAt: Date | null
  newsletter: boolean | null
  address: string | null
  birthday: Date | null
  personalNumber: string | null
  keycloakId: string | null
  stripeCustomerId: string | null
  // Coordinator?: Coordinator[] ;
  // Benefactor?: Benefactor[] ;
  // Beneficiary?: Beneficiary[] ;
  // Campaign?: Campaign[] ;
  // InfoRequest?: InfoRequest[] ;
  // Supporter?: Supporter[] ;
  // Donation?: Donation[] ;
  // RecurringDonation?: RecurringDonation[] ;
  // Transfer?: Transfer[] ;
  // Withdrawal?: Withdrawal[] ;
  // Expense?: Expense[] ;
  // Document?: Document[] ;
}
