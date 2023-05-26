/**
 * 获取博客数据
 */
export async function getWebDataRequest(globalProperties:any):Promise<any[]> {
  const res = await globalProperties.$get("/webData")
  if(res.code != 1) return globalProperties.$message.error("获取失败")
  return res.data
}