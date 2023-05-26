
export interface WebData {
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
    globalProperties.$message("新增成功");
  }else{
    globalProperties.$error("新增失败");
  }
  console.log(globalProperties, webData);
  return res.code == 1
}