export type ISlot = {
  _id?: string;
  room: string;
  date: string;
  startTime: string;
  endTime: string;
};

type TRoomObj = {
  _id: string;
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
  images: string[];
  isDeleted: boolean;
};

export type TSlotManage = {
  _id: string;
  room: TRoomObj;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
  isDeleted: boolean;
};

export type TSlot = {
  _id: string;
  room: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked?: boolean;
  isDeleted: boolean;
};
