export class Property {
  constructor();
  constructor(
    public Id?: number,
    public type?: string,
    public description?: string,
    public rooms?: number,
    public area?: number,
    public washer?: boolean,
    public refrigerator?: boolean,
      public iron?: boolean,
      public addressId?: number,
    public ownerId?: number
  ) {}
};
