export interface ISuspension{
    
    id?: number,
    estatus: string, 
    fecha: Date,
    hora: number,  
    observaciones: string, 
    km: number,
    bph: number, 
    bls: number,
//----------------------------------------------------------------------------------------------------------
//                                      LLAVES FORANEAS
//---------------------------------------------------------------------------------------------------------
    ductoId: number,
    motivoSuspensionId:number,  
    personalCCId: number,
}