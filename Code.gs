function doGet() {
     return HtmlService.createTemplateFromFile('Index')
       .evaluate()
       .setTitle('Portfolio | Data Analyst')
       .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
       .addMetaTag('viewport', 'width=device-width, initial-scale=1');
   }
