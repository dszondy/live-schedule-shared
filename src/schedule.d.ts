export interface Schedule {
  calendarTitle: string;
  id: string;
  reservations: ScheduleReservation[];
  startTime: string;
  endTime: string;
}

/**
 * DB representation of one item on the calendar
 */
export interface ScheduleReservation {
  /**
   * required for editing, only the owner of that reservation will have it
   * readonly
   */
  token: string;
  title: string;
  startTime: string;
  endTime: string;
  version: number;
}
