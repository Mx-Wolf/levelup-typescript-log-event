export interface Dashboard{
  heat:()=>Promise<void>;
  cool:()=>Promise<void>;
}
