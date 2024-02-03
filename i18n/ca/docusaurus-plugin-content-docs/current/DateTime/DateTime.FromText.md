---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Crea un valor datetimezone a partir de formats de data i hora locals i universals.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Crea un valor de <code>datetime</code> a partir d'una representació textual, <code>text</code>. Es pot indicar un paràmetre <code>record</code> opcional, <code>options</code>, per especificar més propietats. L'element <code>record</code> pot contenir els camps següents:<ul>   <li><code>Format</code>: un valor de <code>text</code> que indica el format que s'utilitzarà. Per obtenir més informació, aneu a https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Si ometeu aquest camp o indiqueu un valor <code>null</code>, la data s'analitzarà el millor possible.</li>   <li><code>Culture</code>: si l'element <code>Format</code> no té un valor null, <code>Culture</code> controla alguns especificadors de format. Per exemple, a <code>"en-US"</code>, <code>"MMM"</code> és <code>"Jan", "Feb", "Mar"…</code>, mentre que a <code>"ru-RU"</code>, <code>"MMM"</code> és <code>"янв", "фев", "мар"…</code>. Si <code>Format</code> té un valor <code>null</code>, <code>Culture</code> controla el format que s'utilitza per defecte. Si <code>Culture</code> té un valor <code>null</code> o s'omet, s'utilitza <code>Culture.Current</code>.</li></ul>Per admetre fluxos de treball de llegat, <code>options</code> també pot ser un valor de text. Té el mateix comportament que si <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Converteix &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; en un valor de datetime.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Converteix &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; en un valor de datetime.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Converteix &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; en un valor de datetime.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Converteix &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; en un valor de datetime.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
