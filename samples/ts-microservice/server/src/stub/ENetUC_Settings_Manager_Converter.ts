// [PrintTSConverterCode]
// [PrintTSConverterComments]
/*
 * ENetUC_Settings_Manager_Converter.ts
 * "UC-Server-Access-Protocol-Settings-Manager" ASN.1 stubs.
 * This file was generated by estos esnacc (V5.0.20, 04.10.2023)
 * based on Coral WinSnacc written by Deepak Gupta
 * NOTE: This is a machine generated file - editing not recommended
 */

// prettier-ignore
/* eslint-disable */

// [PrintTSConverterImports]
import { ConverterError, ConverterErrorType, ConverterErrors, TSConverter, IDecodeContext, IEncodeContext, INamedType } from "./TSConverterBase";
import * as ENetUC_Settings_Manager from "./ENetUC_Settings_Manager";
// [PrintTSImports]
import * as asn1ts from "@estos/asn1ts";
import * as ENetUC_Common from "./ENetUC_Common";
import * as ENetUC_Common_Converter from "./ENetUC_Common_Converter";
// [PrintTSRootTypes]
export const moduleName = "ENetUC_Settings_Manager_Converter";

// [PrintTSEncoderDecoderCode]
export class AsnSomeSettings_Converter {
	public static toJSON(s: ENetUC_Settings_Manager.AsnSomeSettings, errors?: ConverterErrors, context?: IEncodeContext, name?: string): ENetUC_Settings_Manager.AsnSomeSettings & INamedType | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addEncodeContext(context, name, "AsnSomeSettings");

		const t = {} as ENetUC_Settings_Manager.AsnSomeSettings & INamedType;

		// [Print_JSON_EncoderSeqDefCode]
		if (newContext.bAddTypes)
			t._type = "AsnSomeSettings";
		TSConverter.fillJSONParam(s, t, "bEnabled", "boolean", errors, newContext, true);
		TSConverter.fillJSONParam(s, t, "u8sUsername", "string", errors, newContext, true);
		TSConverter.fillJSONParam(s, t, "stTime", "Date", errors, newContext, true);

		if (errors.validateResult(newContext, "AsnSomeSettings"))
			return t;

		return undefined;

	}

	public static fromJSON(data: string | object | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Settings_Manager.AsnSomeSettings | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addDecodeContext(context, name, "AsnSomeSettings");

		let t: ENetUC_Settings_Manager.AsnSomeSettings | undefined;
		const s = TSConverter.prepareJSONData<ENetUC_Settings_Manager.AsnSomeSettings>(data, errors, newContext, optional);
		if (s) {
			t = ENetUC_Settings_Manager.AsnSomeSettings["initEmpty"].call(0);
			// [Print_JSON_DecoderSeqDefCode]
			TSConverter.fillJSONParam(s, t, "bEnabled", "boolean", errors, context, true);
			TSConverter.fillJSONParam(s, t, "u8sUsername", "string", errors, context, true);
			if (TSConverter.validateParam(s, "stTime", "string", errors, context, true) && s.stTime)
				t.stTime = new Date(s.stTime);
		}
		if (errors.validateResult(newContext, "AsnSomeSettings"))
			return t;

		return undefined;
	}

	public static toBER(s: ENetUC_Settings_Manager.AsnSomeSettings | undefined, errors?: ConverterErrors, context?: IEncodeContext, name?: string, optional?: boolean | number): asn1ts.Sequence | undefined {
		name ||= "AsnSomeSettings";
		if (!s) {
			TSConverter.addMissingError(errors, context, name, optional);
			return undefined;
		}

		const result = new asn1ts.Sequence(TSConverter.getASN1TSConstructorParams(name, optional));
		const t = result.valueBlock.value;
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addEncodeContext(context, name, "AsnSomeSettings");

		// [Print_BER_EncoderSeqDefCode]
		TSConverter.validateParam(s, "bEnabled", "boolean", errors, newContext, true);
		TSConverter.validateParam(s, "u8sUsername", "string", errors, newContext, true);
		TSConverter.validateParam(s, "stTime", "Date", errors, newContext, true);
		if (errors.validateResult(newContext, "AsnSomeSettings")) {
			if (s.bEnabled !== undefined)
				t.push(new asn1ts.Boolean({ value: s.bEnabled, name: "bEnabled", idBlock: { optionalID: 0 } }));
			if (s.u8sUsername !== undefined)
				t.push(new asn1ts.Utf8String({ value: s.u8sUsername, name: "u8sUsername", idBlock: { optionalID: 1 } }));
			if (s.stTime !== undefined)
				t.push(new asn1ts.Real({ value: TSConverter.getVariantTimeFromDateTime(s.stTime), name: "stTime", idBlock: { optionalID: 2 } }));
			return result;
		}
		return undefined;
	}

	public static fromBER(data: Uint8Array | asn1ts.BaseBlock | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Settings_Manager.AsnSomeSettings | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addDecodeContext(context, name, "AsnSomeSettings");

		let t: ENetUC_Settings_Manager.AsnSomeSettings | undefined;
		const s = TSConverter.prepareASN1BERData(ENetUC_Settings_Manager.AsnSomeSettings.getASN1Schema, data, errors, newContext, optional);
		if (asn1ts.Sequence.typeGuard(s)) {
			t = ENetUC_Settings_Manager.AsnSomeSettings["initEmpty"].call(0);
			// [Print_BER_DecoderSeqDefCode]
			TSConverter.fillASN1Param(s, t, "bEnabled", "Boolean", errors, newContext, true);
			TSConverter.fillASN1Param(s, t, "u8sUsername", "Utf8String", errors, newContext, true);
			TSConverter.fillASN1Param(s, t, "stTime", "AsnSystemTime", errors, newContext, true);
		}

		if (errors.validateResult(newContext, "AsnSomeSettings"))
			return t;

		return undefined;
	}
}

// [PrintTSEncoderDecoderCode]
export class AsnGetSettingsArgument_Converter {
	public static toJSON(s: ENetUC_Settings_Manager.AsnGetSettingsArgument, errors?: ConverterErrors, context?: IEncodeContext, name?: string): ENetUC_Settings_Manager.AsnGetSettingsArgument & INamedType | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addEncodeContext(context, name, "AsnGetSettingsArgument");

		const t = {} as ENetUC_Settings_Manager.AsnGetSettingsArgument & INamedType;

		// [Print_JSON_EncoderSeqDefCode]
		if (newContext.bAddTypes)
			t._type = "AsnGetSettingsArgument";

		if (errors.validateResult(newContext, "AsnGetSettingsArgument"))
			return t;

		return undefined;

	}

	public static fromJSON(data: string | object | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Settings_Manager.AsnGetSettingsArgument | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addDecodeContext(context, name, "AsnGetSettingsArgument");

		let t: ENetUC_Settings_Manager.AsnGetSettingsArgument | undefined;
		const s = TSConverter.prepareJSONData<ENetUC_Settings_Manager.AsnGetSettingsArgument>(data, errors, newContext, optional);
		if (s) {
			t = ENetUC_Settings_Manager.AsnGetSettingsArgument["initEmpty"].call(0);
			// [Print_JSON_DecoderSeqDefCode]
		}
		if (errors.validateResult(newContext, "AsnGetSettingsArgument"))
			return t;

		return undefined;
	}

	public static toBER(s: ENetUC_Settings_Manager.AsnGetSettingsArgument | undefined, errors?: ConverterErrors, context?: IEncodeContext, name?: string, optional?: boolean | number): asn1ts.Sequence | undefined {
		name ||= "AsnGetSettingsArgument";
		if (!s) {
			TSConverter.addMissingError(errors, context, name, optional);
			return undefined;
		}

		const result = new asn1ts.Sequence(TSConverter.getASN1TSConstructorParams(name, optional));
		const t = result.valueBlock.value;
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addEncodeContext(context, name, "AsnGetSettingsArgument");

		// [Print_BER_EncoderSeqDefCode]

		return result;
		return undefined;
	}

	public static fromBER(data: Uint8Array | asn1ts.BaseBlock | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Settings_Manager.AsnGetSettingsArgument | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addDecodeContext(context, name, "AsnGetSettingsArgument");

		let t: ENetUC_Settings_Manager.AsnGetSettingsArgument | undefined;
		const s = TSConverter.prepareASN1BERData(ENetUC_Settings_Manager.AsnGetSettingsArgument.getASN1Schema, data, errors, newContext, optional);
		if (asn1ts.Sequence.typeGuard(s)) {
			t = ENetUC_Settings_Manager.AsnGetSettingsArgument["initEmpty"].call(0);
			// [Print_BER_DecoderSeqDefCode]
		}

		if (errors.validateResult(newContext, "AsnGetSettingsArgument"))
			return t;

		return undefined;
	}
}

// [PrintTSEncoderDecoderCode]
export class AsnSetSettingsResult_Converter {
	public static toJSON(s: ENetUC_Settings_Manager.AsnSetSettingsResult, errors?: ConverterErrors, context?: IEncodeContext, name?: string): ENetUC_Settings_Manager.AsnSetSettingsResult & INamedType | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addEncodeContext(context, name, "AsnSetSettingsResult");

		const t = {} as ENetUC_Settings_Manager.AsnSetSettingsResult & INamedType;

		// [Print_JSON_EncoderSeqDefCode]
		if (newContext.bAddTypes)
			t._type = "AsnSetSettingsResult";

		if (errors.validateResult(newContext, "AsnSetSettingsResult"))
			return t;

		return undefined;

	}

	public static fromJSON(data: string | object | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Settings_Manager.AsnSetSettingsResult | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addDecodeContext(context, name, "AsnSetSettingsResult");

		let t: ENetUC_Settings_Manager.AsnSetSettingsResult | undefined;
		const s = TSConverter.prepareJSONData<ENetUC_Settings_Manager.AsnSetSettingsResult>(data, errors, newContext, optional);
		if (s) {
			t = ENetUC_Settings_Manager.AsnSetSettingsResult["initEmpty"].call(0);
			// [Print_JSON_DecoderSeqDefCode]
		}
		if (errors.validateResult(newContext, "AsnSetSettingsResult"))
			return t;

		return undefined;
	}

	public static toBER(s: ENetUC_Settings_Manager.AsnSetSettingsResult | undefined, errors?: ConverterErrors, context?: IEncodeContext, name?: string, optional?: boolean | number): asn1ts.Sequence | undefined {
		name ||= "AsnSetSettingsResult";
		if (!s) {
			TSConverter.addMissingError(errors, context, name, optional);
			return undefined;
		}

		const result = new asn1ts.Sequence(TSConverter.getASN1TSConstructorParams(name, optional));
		const t = result.valueBlock.value;
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addEncodeContext(context, name, "AsnSetSettingsResult");

		// [Print_BER_EncoderSeqDefCode]

		return result;
		return undefined;
	}

	public static fromBER(data: Uint8Array | asn1ts.BaseBlock | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Settings_Manager.AsnSetSettingsResult | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addDecodeContext(context, name, "AsnSetSettingsResult");

		let t: ENetUC_Settings_Manager.AsnSetSettingsResult | undefined;
		const s = TSConverter.prepareASN1BERData(ENetUC_Settings_Manager.AsnSetSettingsResult.getASN1Schema, data, errors, newContext, optional);
		if (asn1ts.Sequence.typeGuard(s)) {
			t = ENetUC_Settings_Manager.AsnSetSettingsResult["initEmpty"].call(0);
			// [Print_BER_DecoderSeqDefCode]
		}

		if (errors.validateResult(newContext, "AsnSetSettingsResult"))
			return t;

		return undefined;
	}
}

// [PrintTSEncoderDecoderCode]
export class AsnGetSettingsResult_Converter {
	public static toJSON(s: ENetUC_Settings_Manager.AsnGetSettingsResult, errors?: ConverterErrors, context?: IEncodeContext, name?: string): ENetUC_Settings_Manager.AsnGetSettingsResult & INamedType | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addEncodeContext(context, name, "AsnGetSettingsResult");

		const t = {} as ENetUC_Settings_Manager.AsnGetSettingsResult & INamedType;

		// [Print_JSON_EncoderSeqDefCode]
		if (newContext.bAddTypes)
			t._type = "AsnGetSettingsResult";
		const _settings = AsnSomeSettings_Converter.toJSON(s.settings, errors, newContext, "settings");
		if (_settings)
			t.settings = _settings;

		if (errors.validateResult(newContext, "AsnGetSettingsResult"))
			return t;

		return undefined;

	}

	public static fromJSON(data: string | object | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Settings_Manager.AsnGetSettingsResult | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addDecodeContext(context, name, "AsnGetSettingsResult");

		let t: ENetUC_Settings_Manager.AsnGetSettingsResult | undefined;
		const s = TSConverter.prepareJSONData<ENetUC_Settings_Manager.AsnGetSettingsResult>(data, errors, newContext, optional);
		if (s) {
			t = ENetUC_Settings_Manager.AsnGetSettingsResult["initEmpty"].call(0);
			// [Print_JSON_DecoderSeqDefCode]
			const _settings = AsnSomeSettings_Converter.fromJSON(s.settings, errors, newContext, "settings", false);
			if (_settings)
				t.settings = _settings;
		}
		if (errors.validateResult(newContext, "AsnGetSettingsResult"))
			return t;

		return undefined;
	}

	public static toBER(s: ENetUC_Settings_Manager.AsnGetSettingsResult | undefined, errors?: ConverterErrors, context?: IEncodeContext, name?: string, optional?: boolean | number): asn1ts.Sequence | undefined {
		name ||= "AsnGetSettingsResult";
		if (!s) {
			TSConverter.addMissingError(errors, context, name, optional);
			return undefined;
		}

		const result = new asn1ts.Sequence(TSConverter.getASN1TSConstructorParams(name, optional));
		const t = result.valueBlock.value;
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addEncodeContext(context, name, "AsnGetSettingsResult");

		// [Print_BER_EncoderSeqDefCode]
		const _settings = AsnSomeSettings_Converter.toBER(s.settings, errors, newContext, "settings");
		if (errors.validateResult(newContext, "AsnGetSettingsResult")) {
			if (_settings)
				t.push(_settings);
			return result;
		}
		return undefined;
	}

	public static fromBER(data: Uint8Array | asn1ts.BaseBlock | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Settings_Manager.AsnGetSettingsResult | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addDecodeContext(context, name, "AsnGetSettingsResult");

		let t: ENetUC_Settings_Manager.AsnGetSettingsResult | undefined;
		const s = TSConverter.prepareASN1BERData(ENetUC_Settings_Manager.AsnGetSettingsResult.getASN1Schema, data, errors, newContext, optional);
		if (asn1ts.Sequence.typeGuard(s)) {
			t = ENetUC_Settings_Manager.AsnGetSettingsResult["initEmpty"].call(0);
			// [Print_BER_DecoderSeqDefCode]
			const _settings = AsnSomeSettings_Converter.fromBER(s.getTypedValueByName(asn1ts.Sequence, "settings"), errors, newContext, "settings");
			if (_settings)
				t.settings = _settings;
		}

		if (errors.validateResult(newContext, "AsnGetSettingsResult"))
			return t;

		return undefined;
	}
}

// [PrintTSEncoderDecoderCode]
export class AsnSetSettingsArgument_Converter {
	public static toJSON(s: ENetUC_Settings_Manager.AsnSetSettingsArgument, errors?: ConverterErrors, context?: IEncodeContext, name?: string): ENetUC_Settings_Manager.AsnSetSettingsArgument & INamedType | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addEncodeContext(context, name, "AsnSetSettingsArgument");

		const t = {} as ENetUC_Settings_Manager.AsnSetSettingsArgument & INamedType;

		// [Print_JSON_EncoderSeqDefCode]
		if (newContext.bAddTypes)
			t._type = "AsnSetSettingsArgument";
		const _settings = AsnSomeSettings_Converter.toJSON(s.settings, errors, newContext, "settings");
		if (_settings)
			t.settings = _settings;

		if (errors.validateResult(newContext, "AsnSetSettingsArgument"))
			return t;

		return undefined;

	}

	public static fromJSON(data: string | object | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Settings_Manager.AsnSetSettingsArgument | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addDecodeContext(context, name, "AsnSetSettingsArgument");

		let t: ENetUC_Settings_Manager.AsnSetSettingsArgument | undefined;
		const s = TSConverter.prepareJSONData<ENetUC_Settings_Manager.AsnSetSettingsArgument>(data, errors, newContext, optional);
		if (s) {
			t = ENetUC_Settings_Manager.AsnSetSettingsArgument["initEmpty"].call(0);
			// [Print_JSON_DecoderSeqDefCode]
			const _settings = AsnSomeSettings_Converter.fromJSON(s.settings, errors, newContext, "settings", false);
			if (_settings)
				t.settings = _settings;
		}
		if (errors.validateResult(newContext, "AsnSetSettingsArgument"))
			return t;

		return undefined;
	}

	public static toBER(s: ENetUC_Settings_Manager.AsnSetSettingsArgument | undefined, errors?: ConverterErrors, context?: IEncodeContext, name?: string, optional?: boolean | number): asn1ts.Sequence | undefined {
		name ||= "AsnSetSettingsArgument";
		if (!s) {
			TSConverter.addMissingError(errors, context, name, optional);
			return undefined;
		}

		const result = new asn1ts.Sequence(TSConverter.getASN1TSConstructorParams(name, optional));
		const t = result.valueBlock.value;
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addEncodeContext(context, name, "AsnSetSettingsArgument");

		// [Print_BER_EncoderSeqDefCode]
		const _settings = AsnSomeSettings_Converter.toBER(s.settings, errors, newContext, "settings");
		if (errors.validateResult(newContext, "AsnSetSettingsArgument")) {
			if (_settings)
				t.push(_settings);
			return result;
		}
		return undefined;
	}

	public static fromBER(data: Uint8Array | asn1ts.BaseBlock | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Settings_Manager.AsnSetSettingsArgument | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addDecodeContext(context, name, "AsnSetSettingsArgument");

		let t: ENetUC_Settings_Manager.AsnSetSettingsArgument | undefined;
		const s = TSConverter.prepareASN1BERData(ENetUC_Settings_Manager.AsnSetSettingsArgument.getASN1Schema, data, errors, newContext, optional);
		if (asn1ts.Sequence.typeGuard(s)) {
			t = ENetUC_Settings_Manager.AsnSetSettingsArgument["initEmpty"].call(0);
			// [Print_BER_DecoderSeqDefCode]
			const _settings = AsnSomeSettings_Converter.fromBER(s.getTypedValueByName(asn1ts.Sequence, "settings"), errors, newContext, "settings");
			if (_settings)
				t.settings = _settings;
		}

		if (errors.validateResult(newContext, "AsnSetSettingsArgument"))
			return t;

		return undefined;
	}
}

// [PrintTSEncoderDecoderCode]
export class AsnSettingsChangedArgument_Converter {
	public static toJSON(s: ENetUC_Settings_Manager.AsnSettingsChangedArgument, errors?: ConverterErrors, context?: IEncodeContext, name?: string): ENetUC_Settings_Manager.AsnSettingsChangedArgument & INamedType | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addEncodeContext(context, name, "AsnSettingsChangedArgument");

		const t = {} as ENetUC_Settings_Manager.AsnSettingsChangedArgument & INamedType;

		// [Print_JSON_EncoderSeqDefCode]
		if (newContext.bAddTypes)
			t._type = "AsnSettingsChangedArgument";
		const _settings = AsnSomeSettings_Converter.toJSON(s.settings, errors, newContext, "settings");
		if (_settings)
			t.settings = _settings;

		if (errors.validateResult(newContext, "AsnSettingsChangedArgument"))
			return t;

		return undefined;

	}

	public static fromJSON(data: string | object | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Settings_Manager.AsnSettingsChangedArgument | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addDecodeContext(context, name, "AsnSettingsChangedArgument");

		let t: ENetUC_Settings_Manager.AsnSettingsChangedArgument | undefined;
		const s = TSConverter.prepareJSONData<ENetUC_Settings_Manager.AsnSettingsChangedArgument>(data, errors, newContext, optional);
		if (s) {
			t = ENetUC_Settings_Manager.AsnSettingsChangedArgument["initEmpty"].call(0);
			// [Print_JSON_DecoderSeqDefCode]
			const _settings = AsnSomeSettings_Converter.fromJSON(s.settings, errors, newContext, "settings", false);
			if (_settings)
				t.settings = _settings;
		}
		if (errors.validateResult(newContext, "AsnSettingsChangedArgument"))
			return t;

		return undefined;
	}

	public static toBER(s: ENetUC_Settings_Manager.AsnSettingsChangedArgument | undefined, errors?: ConverterErrors, context?: IEncodeContext, name?: string, optional?: boolean | number): asn1ts.Sequence | undefined {
		name ||= "AsnSettingsChangedArgument";
		if (!s) {
			TSConverter.addMissingError(errors, context, name, optional);
			return undefined;
		}

		const result = new asn1ts.Sequence(TSConverter.getASN1TSConstructorParams(name, optional));
		const t = result.valueBlock.value;
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addEncodeContext(context, name, "AsnSettingsChangedArgument");

		// [Print_BER_EncoderSeqDefCode]
		const _settings = AsnSomeSettings_Converter.toBER(s.settings, errors, newContext, "settings");
		if (errors.validateResult(newContext, "AsnSettingsChangedArgument")) {
			if (_settings)
				t.push(_settings);
			return result;
		}
		return undefined;
	}

	public static fromBER(data: Uint8Array | asn1ts.BaseBlock | undefined, errors?: ConverterErrors, context?: IDecodeContext, name?: string, optional?: boolean): ENetUC_Settings_Manager.AsnSettingsChangedArgument | undefined {
		errors ||= new ConverterErrors();
		errors.storeState();
		const newContext = TSConverter.addDecodeContext(context, name, "AsnSettingsChangedArgument");

		let t: ENetUC_Settings_Manager.AsnSettingsChangedArgument | undefined;
		const s = TSConverter.prepareASN1BERData(ENetUC_Settings_Manager.AsnSettingsChangedArgument.getASN1Schema, data, errors, newContext, optional);
		if (asn1ts.Sequence.typeGuard(s)) {
			t = ENetUC_Settings_Manager.AsnSettingsChangedArgument["initEmpty"].call(0);
			// [Print_BER_DecoderSeqDefCode]
			const _settings = AsnSomeSettings_Converter.fromBER(s.getTypedValueByName(asn1ts.Sequence, "settings"), errors, newContext, "settings");
			if (_settings)
				t.settings = _settings;
		}

		if (errors.validateResult(newContext, "AsnSettingsChangedArgument"))
			return t;

		return undefined;
	}
}
