import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    totalInvoice: number;
    invoiceNumber: string;
    keyNumber: string;
    cart: mongoose.Types.DocumentArray<{
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }> & {
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }>;
    payment: mongoose.Types.DocumentArray<{
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }> & {
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }>;
    customer: mongoose.Types.DocumentArray<{
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }> & {
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }>;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    totalInvoice: number;
    invoiceNumber: string;
    keyNumber: string;
    cart: mongoose.Types.DocumentArray<{
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }> & {
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }>;
    payment: mongoose.Types.DocumentArray<{
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }> & {
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }>;
    customer: mongoose.Types.DocumentArray<{
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }> & {
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }>;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    totalInvoice: number;
    invoiceNumber: string;
    keyNumber: string;
    cart: mongoose.Types.DocumentArray<{
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }> & {
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }>;
    payment: mongoose.Types.DocumentArray<{
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }> & {
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }>;
    customer: mongoose.Types.DocumentArray<{
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }> & {
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    totalInvoice: number;
    invoiceNumber: string;
    keyNumber: string;
    cart: mongoose.Types.DocumentArray<{
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }> & {
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }>;
    payment: mongoose.Types.DocumentArray<{
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }> & {
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }>;
    customer: mongoose.Types.DocumentArray<{
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }> & {
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }>;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    totalInvoice: number;
    invoiceNumber: string;
    keyNumber: string;
    cart: mongoose.Types.DocumentArray<{
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }> & {
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }>;
    payment: mongoose.Types.DocumentArray<{
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }> & {
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }>;
    customer: mongoose.Types.DocumentArray<{
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }> & {
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }>;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    totalInvoice: number;
    invoiceNumber: string;
    keyNumber: string;
    cart: mongoose.Types.DocumentArray<{
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }> & {
        name: string;
        price: number;
        sku: string;
        quantity: number;
        photo: string;
        subTotal: number;
    }>;
    payment: mongoose.Types.DocumentArray<{
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }> & {
        method: "cash" | "creditCard" | "sinpe";
        total: number;
        voucher?: string | null | undefined;
        sinpeNumber?: string | null | undefined;
    }>;
    customer: mongoose.Types.DocumentArray<{
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }> & {
        name: string;
        email: string;
        phoneNUmber: number;
        address?: string | null | undefined;
    }>;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
