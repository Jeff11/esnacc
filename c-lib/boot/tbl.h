/*
 *    tbl.h
 *
 *    "TBL" ASN.1 module C type definitions and prototypes
 *
 *    This .h file was generated by snacc on Mon Jun  2 11:23:56 1997
 *
 *    UBC snacc written compiler by Mike Sample
 *
 *    NOTE: This is a machine generated file--editing not recommended
 */


#ifndef _tbl_h_
#define _tbl_h_




typedef enum
    {
        TBL_BOOLEAN = 0,
        TBL_INTEGER = 1,
        TBL_BITSTRING = 2,
        TBL_OCTETSTRING = 3,
        TBL_NULL = 4,
        TBL_OID = 5,
        TBL_REAL = 6,
        TBL_ENUMERATED = 7,
        TBL_SEQUENCE = 8,
        TBL_SET = 9,
        TBL_SEQUENCEOF = 10,
        TBL_SETOF = 11,
        TBL_CHOICE = 12,
        TBL_TYPEREF = 13
    } TBLTypeId; /* ENUMERATED { TBL_BOOLEAN (0), TBL_INTEGER (1), TBL_BITSTRING (2), TBL_OCTETSTRING (3), TBL_NULL (4), TBL_OID (5), TBL_REAL (6), TBL_ENUMERATED (7), TBL_SEQUENCE (8), TBL_SET (9), TBL_SEQUENCEOF (10), TBL_SETOF (11), TBL_CHOICE (12), TBL_TYPEREF (13) }  */

#define BEncTBLTypeIdContent BEncAsnEnumContent

#define BDecTBLTypeIdContent BDecAsnEnumContent

#define PrintTBLTypeId PrintAsnEnum

#define FreeTBLTypeId FreeAsnEnum 




typedef AsnInt TBLTypeDefId; /* INTEGER */

#define BEncTBLTypeDefIdContent BEncAsnIntContent

#define BDecTBLTypeDefIdContent BDecAsnIntContent

#define PrintTBLTypeDefId PrintAsnInt

#define FreeTBLTypeDefId FreeAsnInt 




typedef enum
    {
        UNIVERSAL = 0,
        APPLICATION = 1,
        CONTEXT = 2,
        PRIVATE = 3
    } TBLTagClass; /* ENUMERATED { UNIVERSAL (0), APPLICATION (1), CONTEXT (2), PRIVATE (3) }  */

#define BEncTBLTagClassContent BEncAsnEnumContent

#define BDecTBLTagClassContent BDecAsnEnumContent

#define PrintTBLTagClass PrintAsnEnum

#define FreeTBLTagClass FreeAsnEnum 




typedef struct TBLRange /* SEQUENCE */
{
    AsnInt from; /* [0] IMPLICIT INTEGER */
    AsnInt to; /* [1] IMPLICIT INTEGER */
} TBLRange;

AsnLen BEncTBLRangeContent PROTO ((BUF_TYPE b, TBLRange *v));

void BDecTBLRangeContent PROTO ((BUF_TYPE b, AsnTag tagId0, AsnLen elmtLen0, TBLRange *v, AsnLen *bytesDecoded, ENV_TYPE env));


void PrintTBLRange PROTO ((FILE* f, TBLRange *v, unsigned short indent));
void FreeTBLRange PROTO ((TBLRange *v));





typedef struct TBLNamedNumber /* SEQUENCE */
{
    PrintableString name; /* [0] IMPLICIT PrintableString */
    AsnInt value; /* [1] IMPLICIT INTEGER */
} TBLNamedNumber;

AsnLen BEncTBLNamedNumberContent PROTO ((BUF_TYPE b, TBLNamedNumber *v));

void BDecTBLNamedNumberContent PROTO ((BUF_TYPE b, AsnTag tagId0, AsnLen elmtLen0, TBLNamedNumber *v, AsnLen *bytesDecoded, ENV_TYPE env));


void PrintTBLNamedNumber PROTO ((FILE* f, TBLNamedNumber *v, unsigned short indent));
void FreeTBLNamedNumber PROTO ((TBLNamedNumber *v));





typedef AsnList TBLNamedNumberList; /* SEQUENCE OF TBLNamedNumber */

AsnLen BEncTBLNamedNumberListContent PROTO ((BUF_TYPE b, TBLNamedNumberList *v));

void BDecTBLNamedNumberListContent PROTO ((BUF_TYPE b, AsnTag tagId0, AsnLen elmtLen0, TBLNamedNumberList *v, AsnLen *bytesDecoded, ENV_TYPE env));


void PrintTBLNamedNumberList PROTO ((FILE* f, TBLNamedNumberList *v, unsigned short indent));
void FreeTBLNamedNumberList PROTO ((TBLNamedNumberList *v));





typedef struct TBLTypeRef /* SEQUENCE */
{
    TBLTypeDefId typeDef; /* TBLTypeDefId */
    AsnBool implicit; /* BOOLEAN */
    struct TBLTypeDef *typeDefPtr;  /* Added by MS to hold resolved index */
} TBLTypeRef;

AsnLen BEncTBLTypeRefContent PROTO ((BUF_TYPE b, TBLTypeRef *v));

void BDecTBLTypeRefContent PROTO ((BUF_TYPE b, AsnTag tagId0, AsnLen elmtLen0, TBLTypeRef *v, AsnLen *bytesDecoded, ENV_TYPE env));


void PrintTBLTypeRef PROTO ((FILE* f, TBLTypeRef *v, unsigned short indent));
void FreeTBLTypeRef PROTO ((TBLTypeRef *v));





typedef struct TBLTag /* SEQUENCE */
{
    TBLTagClass tclass; /* TBLTagClass */
    AsnInt code; /* INTEGER (0..MAX) */
    BER_FORM form; /* added by MS to simplify enc/dec */
    AsnTag encTag; /* added by MS to simplify enc/dec */
} TBLTag;

AsnLen BEncTBLTagContent PROTO ((BUF_TYPE b, TBLTag *v));

void BDecTBLTagContent PROTO ((BUF_TYPE b, AsnTag tagId0, AsnLen elmtLen0, TBLTag *v, AsnLen *bytesDecoded, ENV_TYPE env));


void PrintTBLTag PROTO ((FILE* f, TBLTag *v, unsigned short indent));
void FreeTBLTag PROTO ((TBLTag *v));





typedef AsnList TBLTypeSeqOf; /* SEQUENCE OF TBLTag */

AsnLen BEncTBLTypeSeqOfContent PROTO ((BUF_TYPE b, TBLTypeSeqOf *v));

void BDecTBLTypeSeqOfContent PROTO ((BUF_TYPE b, AsnTag tagId0, AsnLen elmtLen0, TBLTypeSeqOf *v, AsnLen *bytesDecoded, ENV_TYPE env));


void PrintTBLTypeSeqOf PROTO ((FILE* f, TBLTypeSeqOf *v, unsigned short indent));
void FreeTBLTypeSeqOf PROTO ((TBLTypeSeqOf *v));





typedef AsnList TBLTypeContentSeqOf; /* SEQUENCE OF TBLType */

AsnLen BEncTBLTypeContentSeqOfContent PROTO ((BUF_TYPE b, TBLTypeContentSeqOf *v));

void BDecTBLTypeContentSeqOfContent PROTO ((BUF_TYPE b, AsnTag tagId0, AsnLen elmtLen0, TBLTypeContentSeqOf *v, AsnLen *bytesDecoded, ENV_TYPE env));


void PrintTBLTypeContentSeqOf PROTO ((FILE* f, TBLTypeContentSeqOf *v, unsigned short indent));
void FreeTBLTypeContentSeqOf PROTO ((TBLTypeContentSeqOf *v));





typedef struct TBLType /* SEQUENCE */
{
    TBLTypeId typeId; /* [0] IMPLICIT TBLTypeId */
    AsnBool optional; /* [1] IMPLICIT BOOLEAN */
    TBLTypeSeqOf* tagList; /* [2] IMPLICIT TBLTypeSeqOf OPTIONAL */
    struct TBLTypeContent* content; /* [3] TBLTypeContent */
    PrintableString fieldName; /* [4] IMPLICIT PrintableString OPTIONAL */
    struct TBLRange* constraint; /* [5] IMPLICIT TBLRange OPTIONAL */
    TBLNamedNumberList* values; /* [6] IMPLICIT TBLNamedNumberList OPTIONAL */
} TBLType;

AsnLen BEncTBLTypeContent PROTO ((BUF_TYPE b, TBLType *v));

void BDecTBLTypeContent PROTO ((BUF_TYPE b, AsnTag tagId0, AsnLen elmtLen0, TBLType *v, AsnLen *bytesDecoded, ENV_TYPE env));


void PrintTBLType PROTO ((FILE* f, TBLType *v, unsigned short indent));
void FreeTBLType PROTO ((TBLType *v));





typedef struct TBLTypeContent /* CHOICE */
{
    enum TBLTypeContentChoiceId
    {
        TBLTYPECONTENT_PRIMTYPE,
        TBLTYPECONTENT_ELMTS,
        TBLTYPECONTENT_TYPEREF
    } choiceId;
    union TBLTypeContentChoiceUnion
    {
    AsnNull primType; /* [0] IMPLICIT NULL */
    TBLTypeContentSeqOf* elmts; /* [1] IMPLICIT TBLTypeContentSeqOf */
    struct TBLTypeRef* typeRef; /* [2] IMPLICIT TBLTypeRef */
    } a;
} TBLTypeContent;

AsnLen BEncTBLTypeContentContent PROTO ((BUF_TYPE b, TBLTypeContent *v));

void BDecTBLTypeContentContent PROTO ((BUF_TYPE b, AsnTag tagId0, AsnLen elmtLen0, TBLTypeContent *v, AsnLen *bytesDecoded, ENV_TYPE env));


void PrintTBLTypeContent PROTO ((FILE* f, TBLTypeContent *v, unsigned short indent));
void FreeTBLTypeContent PROTO ((TBLTypeContent *v));





typedef struct TBLTypeDef /* SEQUENCE */
{
    TBLTypeDefId typeDefId; /* TBLTypeDefId */
    PrintableString typeName; /* PrintableString */
    struct TBLType* type; /* TBLType */
    AsnNull* isPdu; /* NULL OPTIONAL */
} TBLTypeDef;

AsnLen BEncTBLTypeDefContent PROTO ((BUF_TYPE b, TBLTypeDef *v));

void BDecTBLTypeDefContent PROTO ((BUF_TYPE b, AsnTag tagId0, AsnLen elmtLen0, TBLTypeDef *v, AsnLen *bytesDecoded, ENV_TYPE env));


void PrintTBLTypeDef PROTO ((FILE* f, TBLTypeDef *v, unsigned short indent));
void FreeTBLTypeDef PROTO ((TBLTypeDef *v));





typedef AsnList TBLModuleSeqOf; /* SEQUENCE OF TBLTypeDef */

AsnLen BEncTBLModuleSeqOfContent PROTO ((BUF_TYPE b, TBLModuleSeqOf *v));

void BDecTBLModuleSeqOfContent PROTO ((BUF_TYPE b, AsnTag tagId0, AsnLen elmtLen0, TBLModuleSeqOf *v, AsnLen *bytesDecoded, ENV_TYPE env));


void PrintTBLModuleSeqOf PROTO ((FILE* f, TBLModuleSeqOf *v, unsigned short indent));
void FreeTBLModuleSeqOf PROTO ((TBLModuleSeqOf *v));





typedef struct TBLModule /* SEQUENCE */
{
    PrintableString name; /* [0] IMPLICIT PrintableString */
    AsnOid id; /* [1] IMPLICIT OBJECT IDENTIFIER OPTIONAL */
    AsnBool isUseful; /* [2] IMPLICIT BOOLEAN */
    TBLModuleSeqOf* typeDefs; /* [3] IMPLICIT TBLModuleSeqOf */
} TBLModule;

AsnLen BEncTBLModuleContent PROTO ((BUF_TYPE b, TBLModule *v));

void BDecTBLModuleContent PROTO ((BUF_TYPE b, AsnTag tagId0, AsnLen elmtLen0, TBLModule *v, AsnLen *bytesDecoded, ENV_TYPE env));


void PrintTBLModule PROTO ((FILE* f, TBLModule *v, unsigned short indent));
void FreeTBLModule PROTO ((TBLModule *v));





typedef AsnList TBLSeqOf; /* SEQUENCE OF TBLModule */

AsnLen BEncTBLSeqOfContent PROTO ((BUF_TYPE b, TBLSeqOf *v));

void BDecTBLSeqOfContent PROTO ((BUF_TYPE b, AsnTag tagId0, AsnLen elmtLen0, TBLSeqOf *v, AsnLen *bytesDecoded, ENV_TYPE env));


void PrintTBLSeqOf PROTO ((FILE* f, TBLSeqOf *v, unsigned short indent));
void FreeTBLSeqOf PROTO ((TBLSeqOf *v));





typedef struct TBL /* SEQUENCE */
{
    AsnInt totalNumModules; /* INTEGER */
    AsnInt totalNumTypeDefs; /* INTEGER */
    AsnInt totalNumTypes; /* INTEGER */
    AsnInt totalNumTags; /* INTEGER */
    AsnInt totalNumStrings; /* INTEGER */
    AsnInt totalLenStrings; /* INTEGER */
    TBLSeqOf* modules; /* TBLSeqOf */
} TBL;

AsnLen BEncTBL PROTO ((BUF_TYPE b, TBL *v));

void BDecTBL PROTO ((BUF_TYPE b, TBL *result, AsnLen *bytesDecoded, ENV_TYPE env));
AsnLen BEncTBLContent PROTO ((BUF_TYPE b, TBL *v));

void BDecTBLContent PROTO ((BUF_TYPE b, AsnTag tagId0, AsnLen elmtLen0, TBL *v, AsnLen *bytesDecoded, ENV_TYPE env));


void PrintTBL PROTO ((FILE* f, TBL *v, unsigned short  indent));
void FreeTBL PROTO ((TBL *v));






#endif /* conditional include of tbl.h */
