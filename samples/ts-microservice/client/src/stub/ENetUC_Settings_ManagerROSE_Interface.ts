// [PrintTSROSEInterfaceCode]
// [PrintTSROSEHeader]
/**
 * ENetUC_Settings_ManagerROSE_Interface
 * "UC-Server-Access-Protocol-Settings-Manager" ASN.1 interfaces.
 * This file was generated by estos esnacc (V5.0.25, 20.11.2023)
 * based on Coral WinSnacc written by Deepak Gupta
 * NOTE: This is a machine generated file - editing not recommended
 */

// prettier-ignore
/* eslint-disable */
// [PrintTSROSEImport]
import { IReceiveInvokeContext, ISendInvokeContextParams, AsnInvokeProblem } from "./TSROSEBase";
// Local imports
import * as ENetUC_Settings_Manager from "./ENetUC_Settings_Manager";
// [PrintTSImports]
import * as ENetUC_Common from "./ENetUC_Common";
// [PrintTSRootTypes]
export const moduleName = "ENetUC_Settings_ManagerROSEInterface";

// [PrintTSROSEInterface]
export interface IENetUC_Settings_ManagerROSE {
	invoke_asnGetSettings(argument: ENetUC_Settings_Manager.AsnGetSettingsArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_Settings_Manager.AsnGetSettingsResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnSetSettings(argument: ENetUC_Settings_Manager.AsnSetSettingsArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_Settings_Manager.AsnSetSettingsResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	event_asnSettingsChanged(argument: ENetUC_Settings_Manager.AsnSettingsChangedArgument, invokeContext?: ISendInvokeContextParams): void;
}

// [PrintTSROSEHandlerInterface]
// Contains all invokes of the interface (normally the server side)
export interface IENetUC_Settings_ManagerROSE_Invoke_Handler {
	// Allows the implementer to (globally) implement an async local storage (thread local storage) for calls inside the called environment)
	setLogContext?(argument: unknown, invokeContext: IReceiveInvokeContext): void;
	onInvoke_asnGetSettings(argument: ENetUC_Settings_Manager.AsnGetSettingsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Settings_Manager.AsnGetSettingsResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnSetSettings(argument: ENetUC_Settings_Manager.AsnSetSettingsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Settings_Manager.AsnSetSettingsResult | ENetUC_Common.AsnRequestError | undefined>;
}

// Contains all events of the interface (normally the client side)
export interface IENetUC_Settings_ManagerROSE_Event_Handler {
	// Allows the implementer to (globally) implement an async local storage (thread local storage) for calls inside the called environment)
	setLogContext?(argument: unknown, invokeContext: IReceiveInvokeContext): void;
	onEvent_asnSettingsChanged(argument: ENetUC_Settings_Manager.AsnSettingsChangedArgument, invokeContext: IReceiveInvokeContext): void;
}

// Contains all invokes and events of the interface
export type IENetUC_Settings_ManagerROSE_Handler = IENetUC_Settings_ManagerROSE_Invoke_Handler & IENetUC_Settings_ManagerROSE_Event_Handler;

// [PrintTSROSEServerCopyPasteInterface]
/* Copy paste code for the import statement
import { IReceiveInvokeContext } from "./TSROSEBase";
import * as ENetUC_Common from "./ENetUC_Common";
import { ENetUC_Settings_Manager } from "./ENetUC_Settings_Manager";
*/

/**
 * Allows to set the log context for an invoke.
 * This method is called in advanced of methods handled inside this handler
 * The idea is to implement a async local storage based on the provided data from the argument or invokeContext
 *
 * @param argument - the snacc rose argument
 * @param invokeContext - the invoke context
 */
/*
public setLogContext(argument: unknown, invokeContext: IReceiveInvokeContext): void {
}
*/

/**
 * Method to retrieve settings from the server side
 *
 * @param argument - Argument for the asnGetSettings method
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnGetSettingsResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnGetSettings(argument: ENetUC_Settings_Manager.AsnGetSettingsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Settings_Manager.AsnGetSettingsResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Method to store settings on the server side
 *
 * If a settings property has changed the client will get notified by an event
 *
 * @param argument - Argument for the asnSetSettings method
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnSetSettingsResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnSetSettings(argument: ENetUC_Settings_Manager.AsnSetSettingsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Settings_Manager.AsnSetSettingsResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Sent to the clients in the case settings have changed
 *
 * @param argument - Argument for the asnSettingsChanged event
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 */
/*
public onEvent_asnSettingsChanged(argument: ENetUC_Settings_Manager.AsnSettingsChangedArgument, invokeContext: IReceiveInvokeContext): void {
}
*/
