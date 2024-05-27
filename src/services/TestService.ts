import PagingModel from "@models/common/PagingModel"
import { getThaiUsyyyyMMdd } from "@utils/DateUtils"
import axios from "axios"
import moment from 'moment'
import { rootUrl } from './axios';
import { gsbApi } from '@services/axios';
export interface TestResponseModel {
    accountNo: string,
    status: string,
    branch: string,
    asOf: string,
    numberOfPage: string,
    loadDate: string,
    loadTime: string
}

export interface TestMenuResponseModel {
    name: string,
    path: string,
    subMenu?: {
        name: string,
        path: string,
    }[]
}

export interface MonitoringResponseModel {
    channel: string,
    fileType: string,
    fileName: string,
    receiveDate: string,
    paymentDate: string,
    whtFile: string,
    validateFile: string,
    sendValidateResult: string
    DcDrFile: string
    whtReconcile: string
    sendReconsile: string
    RD: string
    rdReason: string
}

export const testApi = async (param: object, body: object) => {
    let data: MonitoringResponseModel[] = [
        {
            channel: "CBS",
            receiveDate: "04/07/2022 22:30",
            fileName: "EDD0407",
            fileType: "statement",
            paymentDate: "04/07/2022",
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        },
        {
            channel: "ColB",
            receiveDate: "04/07/2022 22:30",
            fileName: "Hello",
            fileType: "statement",
            paymentDate: "04/07/2022",
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        }, {
            channel: "ColB",
            receiveDate: "04/07/2022 22:30",
            fileName: "Yakungs",
            fileType: "statement",
            paymentDate: "04/07/2022",
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        }, {
            channel: "CBS",
            receiveDate: "07/07/2022 22:30",
            fileName: "EDD0407",
            fileType: "statement",
            paymentDate: "04/07/2022",
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        }, {
            channel: "CBS",
            receiveDate: "07/09/2022 22:30",
            fileName: "EDD0407",
            fileType: "statement",
            paymentDate: "07/07/2022",
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        }, {
            channel: "CBS",
            receiveDate: "07/09/2022 22:30",
            fileName: "EDD0407",
            fileType: "statement",
            paymentDate: "04/07/2022",
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        }, {
            channel: "CBS",
            receiveDate: "04/07/2022 22:30",
            fileName: "EDD0407",
            fileType: "statement",
            paymentDate: "04/07/2022",
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        }, {
            channel: "CBS",
            receiveDate: "04/07/2022 22:30",
            fileName: "EDD0407",
            fileType: "statement",
            paymentDate: "04/07/2022",
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        }, {
            channel: "CBS",
            receiveDate: "04/07/2022 22:30",
            fileName: "EDD0407",
            fileType: "batch256",
            paymentDate: "04/07/2022",
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        }, {
            channel: "CBS",
            receiveDate: "04/07/2022 22:30",
            fileName: "EDD0407",
            fileType: "statement",
            paymentDate: "04/07/2022",
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        },
    ]
    return data;
}

export interface bodyModel {
    channel: string,
    fileType: string,
    fileName: string,
    startDate: string,
    endDate: string
}

export const testApiMonitoring = async (param: object, body: bodyModel) => {

    let data: MonitoringResponseModel[] = [
        {
            channel: "CBS",
            receiveDate: "04/07/2022 22:30",
            fileName: "EDD0407.txt",
            fileType: "statement",
            paymentDate: getThaiUsyyyyMMdd("07/04/2022"),
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        },
        {
            channel: "ColB",
            receiveDate: "04/07/2022 22:30",
            fileName: "ED_COlB_20220704_20220704220000.txt",
            fileType: "Domestic",
            paymentDate: getThaiUsyyyyMMdd("07/03/2022"),
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: '-',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        }, {
            channel: "ColB",
            receiveDate: "03/07/2022 23:59",
            fileName: "ED_COlB_20220704_20220704230000.txt",
            fileType: "Domestic",
            paymentDate: getThaiUsyyyyMMdd("07/02/2022"),
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        }, {
            channel: "CBS",
            receiveDate: "04/07/2022 22:30",
            fileName: "EDD0307.txt",
            fileType: "Statement",
            paymentDate: getThaiUsyyyyMMdd("07/02/2022"),
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        }, {
            channel: "MyMo",
            receiveDate: "01/07/2022 22:30",
            fileName: "EC_MYMO_20220701_20220704220000.txt",
            fileType: "Cross Border",
            paymentDate: getThaiUsyyyyMMdd("07/11/2022"),
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        }, {
            channel: "CBS",
            receiveDate: "04/07/2022 22:30",
            fileName: "EDD0407",
            fileType: "statement",
            paymentDate: getThaiUsyyyyMMdd("07/02/2022"),
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        }, {
            channel: "CBS",
            receiveDate: "03/07/2022 22:30",
            fileName: "EDD0407",
            fileType: "statement",
            paymentDate: getThaiUsyyyyMMdd("07/04/2022"),
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        }, {
            channel: "CBS",
            receiveDate: "04/07/2022 22:30",
            fileName: "EDD0407",
            fileType: "statement",
            paymentDate: getThaiUsyyyyMMdd("07/04/2022"),
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        }, {
            channel: "CBS",
            receiveDate: "04/07/2022 22:30",
            fileName: "EDD0407",
            fileType: "batch256",
            paymentDate: getThaiUsyyyyMMdd("07/04/2022"),
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        }, {
            channel: "CBS",
            receiveDate: "04/07/2022 22:30",
            fileName: "EDD0407",
            fileType: "statement",
            paymentDate: getThaiUsyyyyMMdd("07/04/2022"),
            whtFile: "success",
            validateFile: "success",
            sendValidateResult: 'Y',
            DcDrFile: 'success',
            whtReconcile: 'success',
            sendReconsile: 'Y',
            RD: 'Reconcile',
            rdReason: '-'
        },
    ]

    console.log(body)

    if (Object.keys(body).length === 0) {
        return data
    } else {
        data = body.channel === 'all' ? data : data.filter((c) => {
            return c.channel === body.channel
        })

        data = body.fileName === '' ? data : data.filter((c) => {
            return c.fileName === body.fileName
        })

        data = body.fileType === 'all' ? data : data.filter((c) => {
            return c.fileType.toLocaleLowerCase() === body.fileType
        })

        data = body.startDate === undefined ? data : data.filter((c) => {
            // console.log(c.paymentDate, body.startDate,body.endDate)
            // console.log(moment(c.paymentDate).isBetween(moment(body.startDate),moment(body.endDate)))
            // return getThaiUsyyyyMMdd(c.paymentDate) === body.startDate
            return moment(c.paymentDate).isBetween(moment(body.startDate), moment(body.endDate))
        })

        return data
    }


}

export const testMenuApi = async (param?: object, body?: object) => {
    let data: TestMenuResponseModel[] = [
        // {
        //     name: "Monitor",
        //     path: "/monitor",
        // },
        // {
        //     name: "Master",
        //     path: "/master",
        // },
        {
            name: "Home Page",
            path: "/",
        },
        {
            name: "Form Page",
            path: "/form",
        },
        {
            name: "Tab Page",
            path: "/tab",
        },
        // {
        //     name: "Blank Page",
        //     path: "/blank",
        // },
        {
            name: "Table Page",
            path: "/table",
        },
        {
            name: "Button Page",
            path: "/button",
        },
        {
            name: "Login Page",
            path: "/login",
        },
        {
            name: "404 Page",
            path: "/notfound",
        },
        {
            name: "Sub Menu",
            path: "/subMenu",
            subMenu: [
                {
                    name: "Sub Menu 1",
                    path: "/",
                },
                {
                    name: "Sub Menu 1",
                    path: "/",
                },
                {
                    name: "Sub Menu 1",
                    path: "/",
                },
                {
                    name: "Sub Menu 1",
                    path: "/",
                },
                {
                    name: "Sub Menu 1",
                    path: "/",
                },
                {
                    name: "Sub Menu 1",
                    path: "/",
                },
                {
                    name: "Sub Menu 1",
                    path: "/",
                },
                {
                    name: "Sub Menu 2",
                    path: "/",
                },
                {
                    name: "Sub Menu 3",
                    path: "/",
                },
            ]
        },
        {
            name: "Sub Menu 2",
            path: "/subMenu",
            subMenu: [
                {
                    name: "Sub Menu 1",
                    path: "/",
                },
                {
                    name: "Sub Menu 2",
                    path: "/",
                },
                {
                    name: "Sub Menu 3",
                    path: "/",
                },
            ]
        },
    ]
    return data;
}

export interface DataListConsent {
    quotationCode: string,
    applicationNo: string,
    agentCode: string,
    idCard: string,
    firstName: string,
    lastName: string,
    consentType: string,
    channel: string,
    channelDes: string,
    print: string,
    mobileNumber: string,
    email: string,
    status: string,
    statusCode: string,
    consentFlag: string,
    consentFlagDes: string,
    formCode: string,
    statusConsent: string,
    url: string,
    createDate: string,
    createBy: string,
    updateDate: string,
    updateBy: string
  }

export interface ListConsetRes {
    data: DataListConsent[],
    pagging: PagingModel
}

export const listConsent = async (param: object, body: object) => {
    let { data } = await axios.post<ListConsetRes>("https://smkagent-uat.smk.co.th/sep/insure/consent/list", body, {
        params: param
    });
    return data;
}

export const test1 = async (param: object, body: object) => {
    let { data } = await axios.post(rootUrl + "/sep/insure/consent/list", body, {
        params: param
    });
    return data;
}

export const test2 = async (param: object, body: object) => {
    // let { data } = await gsbApi.post("/consent/list", body, {
    //     params: param
    // });
    return "";
}