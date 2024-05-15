// [PrintTSCodeOne]
// [PrintTSComments]
/*
 * ENetUC_Settings_Manager.ts
 * "UC-Server-Access-Protocol-Settings-Manager" ASN.1 stubs.
 * This file was generated by estos esnacc (V6.0.7, 15.05.2024)
 * based on Coral WinSnacc written by Deepak Gupta
 * NOTE: This is a machine generated file - editing not recommended
 */

// prettier-ignore
/* eslint-disable */
/**
 * This module is used to retrieve and store settings and to dispatch events for changed settings
 * A client may retrieve settings, adopt them and store them on the server
 * In case a property in the events has changed the server will notify this to connected websocket events
 * Methods and Events
 * Methods:
 * 4100 asnGetSettings					- Sample to get settings
 * 4101 asnSetSettings					- Sample to set settings
 * 4102 asnGetSettingsOld				- Sample for a deprecated flagged method
 * Events:
 * 4150 asnSettingsChanged				- An event that the settings have changed
 */
// [PrintTSImports]
import { TSDeprecatedCallback } from "./TSDeprecatedCallback";
import * as asn1ts from "@estos/asn1ts";
import * as ENetUC_Common from "./ENetUC_Common";
// [PrintTSRootTypes]
export const MODULE_NAME = "ENetUC_Settings_Manager";
export const MODULE_LASTCHANGE = "2024-05-06T00:00:00Z";
export const MODULE_MAJOR_VERSION = 0;
export const MODULE_MINOR_VERSION = 1714953600;
export const MODULE_VERSION = "0.1714953600.0";

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnSomeSettings {
	public constructor(that?: AsnSomeSettings) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnSomeSettings {
		return new AsnSomeSettings();
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p: string[] = [];
		if (bIncludeOptionals) {
			p.push(
				"bEnabled",
				"u8sUsername",
				"stTime"
			);
		}
		return p;
	}

	public static type = "AsnSomeSettings";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnSomeSettings",
			...params,
			value: [
				new asn1ts.Boolean({ name: "bEnabled", idBlock: { optionalID: 0 } }),
				new asn1ts.Utf8String({ name: "u8sUsername", idBlock: { optionalID: 1 } }),
				new asn1ts.Real({ name: "stTime", idBlock: { optionalID: 2 } }),
				new asn1ts.Extension()
			]
		});
	}

	public bEnabled?: boolean;
	public u8sUsername?: string;
	public stTime?: Date;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Argument for the asnGetSettings method
 *
 * @added 06.05.2024
 */
export class AsnGetSettingsArgument {
	public constructor(that?: AsnGetSettingsArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnGetSettingsArgument {
		return new AsnGetSettingsArgument();
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p: string[] = [];
		return p;
	}

	public static type = "AsnGetSettingsArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnGetSettingsArgument",
			...params,
			value: [
				new asn1ts.Extension()
			]
		});
	}
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Result for the asnSetSettings method
 */
export class AsnSetSettingsResult {
	public constructor(that?: AsnSetSettingsResult) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnSetSettingsResult {
		return new AsnSetSettingsResult();
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p: string[] = [];
		return p;
	}

	public static type = "AsnSetSettingsResult";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnSetSettingsResult",
			...params,
			value: [
				new asn1ts.Extension()
			]
		});
	}
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Argument for the asnGetSettingsOld method
 *
 * @deprecated 06.05.2024 *
 */
export class AsnGetSettingsArgumentOld {
	public constructor(that?: AsnGetSettingsArgumentOld) {
		TSDeprecatedCallback.deprecatedObject(1714953600, MODULE_NAME, this);
		Object.assign(this, that);
	}

	private static initEmpty(): AsnGetSettingsArgumentOld {
		return new AsnGetSettingsArgumentOld();
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p: string[] = [];
		return p;
	}

	public static type = "AsnGetSettingsArgumentOld";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnGetSettingsArgumentOld",
			...params,
			value: [
				new asn1ts.Extension()
			]
		});
	}
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Result for the asnGetSettings method
 */
export class AsnGetSettingsResult {
	public constructor(that: AsnGetSettingsResult) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnGetSettingsResult {
		return new AsnGetSettingsResult({
			settings: AsnSomeSettings["initEmpty"].call(0)
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"settings"
		];
		return p;
	}

	public static type = "AsnGetSettingsResult";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnGetSettingsResult",
			...params,
			value: [
				AsnSomeSettings.getASN1Schema({ name: "settings" }),
				new asn1ts.Extension()
			]
		});
	}

	/** @added 06.05.2024 */
	public settings!: AsnSomeSettings;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Argument for the asnSetSettings method
 */
export class AsnSetSettingsArgument {
	public constructor(that: AsnSetSettingsArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnSetSettingsArgument {
		return new AsnSetSettingsArgument({
			settings: AsnSomeSettings["initEmpty"].call(0)
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"settings"
		];
		return p;
	}

	public static type = "AsnSetSettingsArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnSetSettingsArgument",
			...params,
			value: [
				AsnSomeSettings.getASN1Schema({ name: "settings" }),
				new asn1ts.Extension()
			]
		});
	}

	public settings!: AsnSomeSettings;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Result for the asnGetSettingsOld method
 *
 * @deprecated 06.05.2024 *
 */
export class AsnGetSettingsResultOld {
	public constructor(that: AsnGetSettingsResultOld) {
		TSDeprecatedCallback.deprecatedObject(1714953600, MODULE_NAME, this);
		Object.assign(this, that);
	}

	private static initEmpty(): AsnGetSettingsResultOld {
		return new AsnGetSettingsResultOld({
			settings: AsnSomeSettings["initEmpty"].call(0)
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"settings"
		];
		return p;
	}

	public static type = "AsnGetSettingsResultOld";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnGetSettingsResultOld",
			...params,
			value: [
				AsnSomeSettings.getASN1Schema({ name: "settings" }),
				new asn1ts.Extension()
			]
		});
	}

	public settings!: AsnSomeSettings;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Argument for the asnSettingsChanged event
 */
export class AsnSettingsChangedArgument {
	public constructor(that: AsnSettingsChangedArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnSettingsChangedArgument {
		return new AsnSettingsChangedArgument({
			settings: AsnSomeSettings["initEmpty"].call(0)
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"settings"
		];
		return p;
	}

	public static type = "AsnSettingsChangedArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnSettingsChangedArgument",
			...params,
			value: [
				AsnSomeSettings.getASN1Schema({ name: "settings" }),
				new asn1ts.Extension()
			]
		});
	}

	public settings!: AsnSomeSettings;
}
