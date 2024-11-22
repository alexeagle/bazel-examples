// @generated by protoc-gen-connect-es v1.6.1 with parameter "keep_empty_files=true,target=js+dts"
// @generated from file packages/connect/src/proto/eliza.proto (package connectrpc.eliza.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ConverseRequest, ConverseResponse, IntroduceRequest, IntroduceResponse, SayRequest, SayResponse } from "./eliza_pb.js";
import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service connectrpc.eliza.v1.ElizaService
 */
export declare const ElizaService: {
  readonly typeName: "connectrpc.eliza.v1.ElizaService",
  readonly methods: {
    /**
     * @generated from rpc connectrpc.eliza.v1.ElizaService.Say
     */
    readonly say: {
      readonly name: "Say",
      readonly I: typeof SayRequest,
      readonly O: typeof SayResponse,
      readonly kind: MethodKind.Unary,
      readonly idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * @generated from rpc connectrpc.eliza.v1.ElizaService.Converse
     */
    readonly converse: {
      readonly name: "Converse",
      readonly I: typeof ConverseRequest,
      readonly O: typeof ConverseResponse,
      readonly kind: MethodKind.BiDiStreaming,
    },
    /**
     * @generated from rpc connectrpc.eliza.v1.ElizaService.Introduce
     */
    readonly introduce: {
      readonly name: "Introduce",
      readonly I: typeof IntroduceRequest,
      readonly O: typeof IntroduceResponse,
      readonly kind: MethodKind.ServerStreaming,
    },
  }
};

