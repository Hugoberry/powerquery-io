---
title: Table.Schema
---

# Table.Schema


## Description

निर्दिष्ट तालिका के स्तंभों (अर्थात स्कीमा) के वर्णन वाली तालिका लौटाता है.


## Syntax

```powerquery
Table.Schema(
    table as table
) as table
```


## Details

<code>table</code> के कालम्स का वर्णन करने वाली एक तालिका लौटाता है.<br />तालिका की प्रत्येक पंक्ति <code>table</code> के किसी कालम के गुणों का वर्णन करती है:<br /><table>  <tr>    <td><b>कालम का नाम</b></td>    <td><b>Description</b></td>  </tr>  <tr>    <td><code>Name</code></td>    <td>कालम का नाम.</td>  </tr>  <tr>    <td><code>Position</code></td>    <td><code>table</code> में कालम की शून्य-आधारित स्थिति.</td>  </tr>  <tr>    <td><code>TypeName</code></td>    <td>कालम के प्रकार का नाम.</td>  </tr>  <tr>    <td><code>Kind</code></td>    <td>कालम के प्रकार की क़िस्म.</td>  </tr>  <tr>    <td><code>IsNullable</code></td>    <td>क्या कालम में <code>null</code> मान हो सकते हैं.</td>  </tr>  <tr>    <td><code>NumericPrecisionBase</code></td>    <td><code>NumericPrecision</code> और <code>NumericScale</code> फ़ील्ड्स के संख्यात्मक आधार (उदाहरण के लिए, आधार-2 या आधार-10).</td>  </tr>  <tr>    <td><code>NumericPrecision</code></td>    <td> <code>NumericPrecisionBase</code>द्वारा निर्दिष्ट आधार में किसी संख्यात्मक कालम की परिशुद्धता. इस प्रकार के मान द्वारा प्रतिनिधित्व किए जा सकने के लिए अंकों की यह अधिकतम संख्या है (इसमें दशमलव अंक शामिल हैं).</td>  </tr>  <tr>    <td><code>NumericScale</code></td>    <td> <code>NumericPrecisionBase</code>द्वारा निर्दिष्ट आधार में किसी संख्यात्मक कालम का स्केल. यह इस प्रकार के मान के दशमलव भाग में अंकों की संख्या है. <code>0</code> का मान, बिना किसी दशमलव अंकों वाले निश्चित स्केल को इंगित करता है.<code>null</code> का मान इंगित करता है कि स्केल ज्ञात नहीं है (या तो यह फ़्लोटिंग है या परिभाषित नहीं है).</td>  </tr>  <tr>    <td><code>DateTimePrecision</code></td>    <td>किसी दिनांक या समय मान के सेकंड भाग में समर्थित दशमलव अंकों की अधिकतम संख्या.</td>  </tr>  <tr>    <td><code>MaxLength</code></td>    <td>किसी <code>text</code> कालम में अनुमत वर्णों की अधिकतम संख्या, या , किसी <code>binary</code> कालम में अनुमत बाइट्स की अधिकतम संख्या.</td>  </tr>  <tr>    <td><code>IsVariableLength</code></td>    <td>इंगित करता है कि क्या यह कालम लंबाई में भिन्न हो सकता है (<code>MaxLength</code>की सीमा तक) या यह निश्चित आकार का है.</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>NativeTypeName</code></td>    <td>स्रोत के नेटिव प्रकार सिस्टम में कालम के प्रकार का नाम (उदाहरण के लिए, SQL Server के लिए <code>nvarchar</code>).</td>  </tr>  <tr>    <td><code>NativeDefaultExpression</code></td>    <td>स्रोत की मूल व्यंजक भाषा में इस स्तंभ के मान के लिए डिफ़ॉल्ट व्यंजक (उदाहरण के लिए, SQL Server के लिए <code>42</code> or <code>newid()</code>).</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>&nbsp;</td>  </tr>  <tr>    <td><code>Description</code></td>    <td>कालम का वर्णन.</td>  </tr></table><br />



## Category
Table.Information
