// [PrintTSCode]
// [PrintTSComments]
/*
 * ENetUC_Event_Manager.ts
 * "UC-Server-Access-Protocol-Event-Manager" ASN.1 stubs.
 * This file was generated by estos esnacc (V5.0.0, 15.03.2023)
 * based on Coral WinSnacc written by Deepak Gupta
 * NOTE: This is a machine generated file - editing not recommended
 */

// prettier-ignore
/* eslint-disable curly, max-len, max-lines, no-unused-vars, jsdoc/require-jsdoc, @typescript-eslint/naming-convention, @typescript-eslint/no-use-before-define, @typescript-eslint/no-unused-vars */
// [printTSImports]
import * as asn1ts from "@estos/asn1ts";
import * as ENetUC_Common from "./ENetUC_Common";
// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnCreateFancyEventsArgument {
	public constructor(that: AsnCreateFancyEventsArgument) {
		Object.assign(this, that);
	}

	public static initEmpty(): AsnCreateFancyEventsArgument {
		return new AsnCreateFancyEventsArgument({
			iEventDelay: 0,
			iEventCount: 0
		});
	}

	public static type = "AsnCreateFancyEventsArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnCreateFancyEventsArgument",
			...params,
			value: [
				new asn1ts.Integer({ name: "iEventDelay" }),
				new asn1ts.Integer({ name: "iEventCount" }),
				ENetUC_Common.AsnOptionalParameters.getASN1Schema({ name: "optionalParams", optional: true })
			]
		});
	}

	public iEventDelay!: number;
	public iEventCount!: number;
	public optionalParams?: ENetUC_Common.AsnOptionalParameters;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnCreateFancyEventsResult {
	public constructor(that?: AsnCreateFancyEventsResult) {
		Object.assign(this, that);
	}

	public static initEmpty(): AsnCreateFancyEventsResult {
		return new AsnCreateFancyEventsResult();
	}

	public static type = "AsnCreateFancyEventsResult";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnCreateFancyEventsResult",
			...params,
			value: [
				ENetUC_Common.AsnOptionalParameters.getASN1Schema({ name: "optionalParams", optional: true })
			]
		});
	}

	public optionalParams?: ENetUC_Common.AsnOptionalParameters;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnFancyEventArgument {
	public constructor(that: AsnFancyEventArgument) {
		Object.assign(this, that);
	}

	public static initEmpty(): AsnFancyEventArgument {
		return new AsnFancyEventArgument({
			iEventCounter: 0,
			iEventsLeft: 0
		});
	}

	public static type = "AsnFancyEventArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnFancyEventArgument",
			...params,
			value: [
				new asn1ts.Integer({ name: "iEventCounter" }),
				new asn1ts.Integer({ name: "iEventsLeft" }),
				ENetUC_Common.AsnOptionalParameters.getASN1Schema({ name: "optionalParams", optional: true })
			]
		});
	}

	public iEventCounter!: number;
	public iEventsLeft!: number;
	public optionalParams?: ENetUC_Common.AsnOptionalParameters;
}
