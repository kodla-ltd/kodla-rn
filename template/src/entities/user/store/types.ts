import { UserProfileModel } from '~/entities/user/model';
import { UserAuth } from '~/features/auth/model';

export interface UserState {
  profile: Nullable<UserProfileModel>;
  auth: Nullable<UserAuth>;
}
