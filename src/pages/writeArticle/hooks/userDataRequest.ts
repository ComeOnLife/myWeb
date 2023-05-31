
export interface WebData {
  id?: number,
  title: string,
  content: string,
  categoryId: number | string
}
/**
 * 新增博客
 */
export async function addWebDataRequest(globalProperties:any,webData:WebData):Promise<boolean> {
  const res = await globalProperties.$post("/webData", webData)
  if(res.code == 1) {
    globalProperties.$message.success(webData.id ? "修改成功" : "新增成功");
  }else{
    globalProperties.$message.error(webData.id ? "修改失败" : "新增失败");
  }
  return res.code == 1
}