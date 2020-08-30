import {
  AcceptedValidator,
  AfterOrEqualValidator,
  AfterValidator,
  AlphaNumDashSpaceValidator,
  AlphaNumDashValidator,
  AlphaNumSpaceValidator,
  AlphaNumValidator,
  AlphaSpaceValidator,
  AlphaValidator,
  ArrayValidator,
  BeforeOrEqualValidator,
  BeforeValidator,
  BetweenValidator,
  BooleanValidator,
  CardExpirationValidator,
  CardNumberValidator,
  CurrencyValidator,
  DateEqualsValidator,
  DateValidator,
  EmailValidator,
  IntegerValidator,
  InValidator,
  MaxValidator,
  MinValidator,
  NotInValidator,
  NotRegexValidator,
  NumericValidator,
  PhoneValidator,
  RegexValidator,
  RequiredValidator,
  SizeValidator,
  StringValidator,
  TypeOfValidator,
  UrlValidator
} from '../validators';

export default {
  accepted: AcceptedValidator,
  after: AfterValidator,
  after_or_equal: AfterOrEqualValidator,
  alpha: AlphaValidator,
  alpha_space: AlphaSpaceValidator,
  alpha_num: AlphaNumValidator,
  alpha_num_space: AlphaNumSpaceValidator,
  alpha_num_dash: AlphaNumDashValidator,
  alpha_num_dash_space: AlphaNumDashSpaceValidator,
  array: ArrayValidator,
  before: BeforeValidator,
  before_or_equal: BeforeOrEqualValidator,
  between: BetweenValidator,
  boolean: BooleanValidator,
  card_exp: CardExpirationValidator,
  card_num: CardNumberValidator,
  currency: CurrencyValidator,
  date: DateValidator,
  date_equals: DateEqualsValidator,
  email: EmailValidator,
  in: InValidator,
  integer: IntegerValidator,
  max: MaxValidator,
  min: MinValidator,
  not_in: NotInValidator,
  not_regex: NotRegexValidator,
  numeric: NumericValidator,
  phone: PhoneValidator,
  regex: RegexValidator,
  required: RequiredValidator,
  size: SizeValidator,
  string: StringValidator,
  typeof: TypeOfValidator,
  url: UrlValidator
};
