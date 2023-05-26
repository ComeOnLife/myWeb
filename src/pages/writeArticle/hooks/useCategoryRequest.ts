
//新增分类
export interface Form {
  category: string;
}
/**
 * 新增分类request
 * @param globalProperties vue实例的全局
 * @param form 
 */
export async function addCategoryRequest(globalProperties:any, form: Form):Promise<boolean> {
  const res = await globalProperties.$post("/category", form)
  console.log(res);
  if(res.code == 1) {
    globalProperties.$message.success("新增成功")
  }else {
    globalProperties.$message.error(res.msg)
  }
 return res.code == 1 
}

export async function getCategoryRequest(globalProperties:any):Promise<any[]> {
  const res = await globalProperties.$get("/category")
  console.log(res);
  if(res.code != 1) {
    globalProperties.$message.error(res.msg)
  }
  return res.data;
}