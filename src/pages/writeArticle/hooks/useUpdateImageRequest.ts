
/**
 * 图片上传
 * @param globalProperties 
 * @param form 
 */
export const useUpdateImageRequest = async (globalProperties:any, form: FormData) => {
  const res = await globalProperties.$post("/upload", form)
  console.log(res);
  if(res.code != 1) {
    globalProperties.$message.error(res.msg)
  }
  return res.data
}