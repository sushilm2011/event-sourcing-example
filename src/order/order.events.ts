export class OrderCreated {
  constructor(public readonly id: string) {}
}

export class OrderShipped {
  constructor(public readonly id: string) {}
}

export class OrderCancelled {
  constructor(public readonly id: string) {}
}
