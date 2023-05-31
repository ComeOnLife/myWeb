/**
 * 获取博客数据
 * @param globalProperties 
 * @param id 
 * @param pageSize 
 * @param pageNum 
 */
export async function useGetWebDataRequest(globalProperties:any, id?: number, pageSize?: number, pageNum?: number):Promise<any[]> {
  const res = await globalProperties.$get("/webData", {id,pageSize,pageNum})
  if(res.code != 1) return globalProperties.$message.error("获取失败")
  return res.data.records
}


/**
 * 获取博客数据 按分类获取
 * @param globalProperties 
 */
export async function useGetWebDataAndCategaryRequest(globalProperties:any):Promise<any[]> {
  const res = await globalProperties.$get("/webData/category")
  if(res.code != 1) return globalProperties.$message.error("获取失败")
  return res.data
}

/**
 * 删除博客
 * @param globalProperties 
 * @param id 
 */
export async function useDeleteWebDataRequest(globalProperties:any, id:Number):Promise<any[]> {
  const res = await globalProperties.$post("/webData/delete", {id})
  if(res.code != 1) return globalProperties.$message.error("删除失败")
  return globalProperties.$message.success("删除成功")
}