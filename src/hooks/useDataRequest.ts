/**
 * 获取博客数据 按分类获取
 */
export async function getWebDataAndCategaryRequest(globalProperties:any):Promise<any[]> {
  const res = await globalProperties.$get("/webData/category")
  if(res.code != 1) return globalProperties.$message.error("获取失败")
  return res.data
}