/**
 * 使用vue-quill富文本编辑器
 */
function useVueQuill() {
  const editorOption:any = {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
        [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
        [{ align: [] }], // 对齐方式
        [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
        [{ font: [] }], // 字体种类
        [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
        [{ direction: 'ltl' }], // 文本方向
        [{ direction: 'rtl' }], // 文本方向
        [{ indent: '-1' }, { indent: '+1' }], // 缩进
        [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
        [{ script: 'sub' }, { script: 'super' }], // 上标/下标
        ['blockquote', 'code-block'], // 引用  代码块
        ['clean'], // 清除文本格式
        ['link', 'image', 'video'], // 链接、图片、视频
      ],
    },
  };
  return {
    editorOption,
  }
}
export default useVueQuill