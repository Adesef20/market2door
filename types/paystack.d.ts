declare module "@paystack/inline-js" {
  interface PaystackTransaction {
    reference: string;
  }

  interface PaystackTransactionOptions {
    key: string;
    email: string;
    amount: number;
    reference: string;
    onSuccess?: (transaction: PaystackTransaction) => void;
    onCancel?: () => void;
  }

  class PaystackPop {
    newTransaction(options: PaystackTransactionOptions): void;
  }

  export default PaystackPop;
}