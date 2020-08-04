/**
 * Поля в worker.ForkObj
 */
interface WorkerBetObject {
  market: string;
  odd: string;
  param?: number;
  period: number;
  subperiod: number;
  overtimeType: number;
}

export default WorkerBetObject;
