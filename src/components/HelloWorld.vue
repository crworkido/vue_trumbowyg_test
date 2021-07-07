<template>
  <div class="hello">
    <button @click="showMeTheMoney"> Show It </button>
    <trumbowyg ref="eddy" v-model="editorData" :config="edConfig.btest"></trumbowyg>
  </div>
</template>

<script>
import "trumbowyg/dist/ui/trumbowyg.min.css"
import "trumbowyg/dist/plugins/colors/ui/trumbowyg.colors.min.css"
import "trumbowyg/dist/plugins/table/ui/trumbowyg.table.min.css"

import Trumbowyg from "vue2-trumbowyg"
// import plugins
import "trumbowyg/plugins/fontfamily/trumbowyg.fontfamily.js"
import "trumbowyg/plugins/fontsize/trumbowyg.fontsize.js"
import "trumbowyg/plugins/colors/trumbowyg.colors.js"
import "trumbowyg/plugins/resizimg/trumbowyg.resizimg.js"
import "trumbowyg/plugins/table/trumbowyg.table.js"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Trumbowyg
  },
  data() { 
    return {
      editorData: `
<p style="text-align: left; ">Hi there,</p><p style="text-align: left; ">Check bold text, italic text, deleted text. Background color, Extra large text, Check the link here as well.</p><p style="text-align: left; ">As we discussed last week we have different ideas (Text fonts):</p><ol><li style="text-align: left; ">Font A</li><li style="text-align: left; ">Font B</li><li style="text-align: left;">Font C</li></ol><p style="text-align: left;">We can also use different color options:</p><ul><li style="text-align: left;">red</li><li style="text-align: left;">blue</li><li style="text-align: left; ">green</li></ul><p>Here is some (url image)</p><p><br></p><p style="text-align: center; ">Check the prices</p><table class="trumbowtable"><tbody><tr><td>Option 1</td><td>&nbsp;100 Euro</td><td>Monthly</td></tr><tr><td>Option 2<br></td><td>120 Euro</td><td>Test</td></tr></tbody></table><br><p style="text-align: left; ">Uploaded/Pasted Image</p><p><br></p> 
      `,
      edConfig: {
        basic: {
          autogrow: false
        },
        btest: {
          autogrow: false,
          btns: [
            ['viewHTML', 'fontfamily', 'fontsize', 'foreColor', 'backColor','table'],
            ['undo', 'redo'], // Only supported in Blink browsers
            ['formatting'],
            ['strong', 'em', 'del'],
            ['superscript', 'subscript'],
            ['link'],
            ['insertImage'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
            ['horizontalRule'],
            ['removeformat'],
            ['fullscreen']
          ],
      plugins: {
        resizimg: {
          minSize:64,
          step: 16
        },
        table: {
          styler: 'trumbowtable'
        },
//        fontfamily: {
//          fontList: [
//            {name: 'Arial', family: 'Arial, Helvetica, sans-serif'},
//            {name: 'Open Sans', family: '\'Open Sans\', sans-serif'}
//          ]
//        }
      }

        },
        advanced: {
          autogrow: true,
          removeformatPasted: true,
          // Adding color plugin button
          btnsAdd: ["foreColor", "backColor"],
          // Limit toolbar buttons
          btns: [
            ["bold", "italic"],
            ["formatting"],
            ["link"],
            ["foreColor"],
            ["backColor"]
          ]
        }
      }
    }
  },
  methods: {
    showMeTheMoney: function() {
      console.log(this.$refs.eddy)
    }
  },
  mounted() {
    

    window.jQuery('.trumbowyg-textarea').trumbowyg({
      plugins: {
        resizimg: {
          minSize:64,
          step: 16
        },
        table: {
          styler: 'trumbowtable'
        },
        fontfamily: {
          fontList: [
            {name: 'Arial', family: 'Arial, Helvetica, sans-serif'},
            {name: 'Open Sans', family: '\'Open Sans\', sans-serif'}
          ]
        }
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trumbowyg-editor table {
  border: 1px
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
