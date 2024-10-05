import { ErrorData, ErrorProps } from "./types/fetcher.js";

export class StorefrontError extends Error {
  code?: string;
  errors: ErrorData[];

  constructor({ message, code, errors }: ErrorProps) {
    const error: ErrorData = message
      ? { message, ...(code ? { code } : {}) }
      : errors![0];

    super(error.message);
    this.errors = message ? [error] : errors!;

    if (error.code) this.code = error.code;
  }
}

// Used for errors that come from a bad implementation of the hooks
export class ValidationError extends StorefrontError {
  constructor(options: ErrorProps) {
    super(options);
    this.code = "validation_error";
  }
}

export class FetcherError extends StorefrontError {
  status: number;

  constructor(
    options: {
      status: number;
    } & ErrorProps,
  ) {
    super(options);
    this.status = options.status;
  }
}
