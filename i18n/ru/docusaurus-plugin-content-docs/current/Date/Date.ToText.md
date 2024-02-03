---
title: Date.ToText
---

# Date.ToText


## Description

Возвращает текстовое представление значения даты.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

Возвращает текстовое представление <code>date</code>. При необходимости можно задать необязательный параметр <code>options</code> типа <code>record</code> для указания дополнительных свойств. Параметр <code>culture</code> используется только для рабочих процессов прежних версий. В состав <code>record</code> могут входить следующие поля:<ul>   <li><code>Format</code>. Значение типа <code>text</code>, указывающее используемый формат. Дополнительные сведения: https://go.microsoft.com/fwlink/?linkid=2180104 и https://go.microsoft.com/fwlink/?linkid=2180105. Если пропустить это поле или указать <code>NULL</code>, будет использован формат даты по умолчанию, заданный в <code>Culture</code>.</li>   <li><code>Culture</code>: если <code>Format</code> не имеет значения NULL, <code>Culture</code> управляет определенными спецификаторами формата. Например, при использовании <code>"en-US"</code> значение <code>"MMM"</code> представляется как <code>"Jan", "Feb", "Mar", …</code>, тогда как для <code>"ru-RU"</code> значение <code>"MMM"</code> выглядит как <code>"янв", "фев", "мар", …</code>. Если <code>Format</code> имеет значение <code>NULL</code>, <code>Culture</code> задает формат, используемый по умолчанию. Если значение <code>Culture</code> равно <code>NULL</code> или пропущено, используется <code>Culture.Current</code>.</li></ul>Для поддержки прежних версий рабочих процессов <code>options</code> и <code>culture</code> также могут быть текстовыми значениями. При этом происходит то же самое, что и при <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Преобразование &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; в значение &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Результат может зависеть от текущего языка и региональных параметров.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Преобразование с помощью пользовательского формата и м формате и немецкого языка и региональных параметров.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Поиск года в календаре Хиджра, который соответствует 1 января 2000 года в григорианском календаре.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
