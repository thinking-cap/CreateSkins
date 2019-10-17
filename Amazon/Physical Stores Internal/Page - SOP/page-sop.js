
LOB.extend.Runbook_Steps = function (e) {

    console.log("start runbook steps skin-----------------------------");

    var Runbook_Steps = document.createElement('ol');
    LOB.parseElements(e.children, Runbook_Steps);
    return { element: Runbook_Steps, css: 'Runbook_Steps' };


    console.log("end runbook steps skin-----------------------------");

};

LOB.extend.Step = function (e) {
    console.log("start runbook steps Step skin-----------------------------");
    var el = document.createElement('li');
    LOB.parseElements(e.children, el);
    return { element: el };
};

LOB.extend.Heading = function (e) {
    console.log("start runbook steps Heading skin-----------------------------");
    var el = document.createElement('h2');
    LOB.parseElements(e.children, el);
    return { element: el };
};

LOB.extend.Subheading = function (e) {
    console.log("start runbook steps Subheading skin-----------------------------");
    var el = document.createElement('h3');
    LOB.parseElements(e.children, el);
    return { element: el };
};

LOB.extend.Paragraph = function (e) {
    console.log("start runbook steps Paragraph skin-----------------------------");
    var el = document.createElement('p');
    LOB.parseElements(e.children, el);
    return { element: el };
};

LOB.extend.Unordered_List = function (e) {
    console.log("start runbook steps Unordered_List skin-----------------------------");
    var el = document.createElement('ol');
    LOB.parseElements(e.children, el);
    return { element: el };
};

LOB.extend.Unordered_List = function (e) {
    console.log("start runbook steps Unordered_List skin-----------------------------");
    var el = document.createElement('ol');
    LOB.parseElements(e.children, el);
    return { element: el };
};

LOB.extend.List_Item = function (e) {
    console.log("start runbook steps List_Item skin-----------------------------");
    var el = document.createElement('li');
    LOB.parseElements(e.children, el);
    return { element: el };

    // LOB.parseElements(e.children,Unordered_List);
    // return { element: Unordered_List, css: 'list_item' };
};

LOB.extend.Callout = function (e) {
    console.log("start runbook steps Callout skin-----------------------------");
    var el = document.createElement('div');
    LOB.parseElements(e.children, el);
    return { element: el, css: 'alert alert-info' };
};

// LOB.extend.Table = function(e){
//     var el = document.createElement(table);
//     LOB.parseElements(e.children,el);
//     return {element : el, css: 'table table-hover table-striped'};
// };

LOB.extend.Image = function (e) {
    //console.log("start runbook steps Image skin-----------------------------");  

    var img = document.createElement('img');

    var src = LOB.checkObj(e, 'Src');
    LOB.log('***************** Custom Image Src: ' + src + ' *******************');
    var id = src.split('.')[0];
    var ext = '';
    if (src.split('.').length > 1) {
        ext = src.split('.')[1];
        if (ext && ext != '')
            ext = '.' + ext;
    }
    if (mediaPath != '')
        img.setAttribute('file', mediaPath + '/' + src);
    else
        img.setAttribute('file', baseHref + '/Create/ScoEditor/DisplayMedia.aspx?id=' + id + ext + '&type=image');

    return { element: img, css: 'img-responsive' };
};

LOB.extend.Video = function (e) {
    console.log("start runbook steps Video skin-----------------------------");
    var el = document.createElement(div);
    LOB.parseElements(e.children, el);
    return { element: el, css: 'embed-responsive embed-responsive-16by9' };
    // <iframe class="embed-responsive-item" src="..."></iframe>
};

LOB.extend.Document = function (e) {
    console.log("start runbook steps Document skin-----------------------------");
    var el = document.createElement(div);
    LOB.parseElements(e.children, el);
    return { element: el, css: 'document' };
};

