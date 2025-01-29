import { RootState } from '@/store';

import { HooryStateType } from './type';

const getHoory = (state: RootState): HooryStateType => state.hoory;

export { getHoory };
