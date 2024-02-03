---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Crea un valor de datetimezone a partir de formats de datetimezone locals, universals i personalitzats.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Crea un valor de <code>datetimezone</code> a partir d'una representació textual, <code>text</code>. Es pot indicar un paràmetre <code>record</code> opcional, <code>options</code>, per especificar més propietats. L'element <code>record</code> pot contenir els camps següents:<ul>   <li><code>Format</code>: un valor de <code>text</code> que indica el format que s'utilitzarà. Per obtenir més informació, aneu a https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Si ometeu aquest camp o indiqueu un valor <code>null</code>, la data s'analitzarà el millor possible.</li>   <li><code>Culture</code>: si l'element <code>Format</code> no té un valor null, <code>Culture</code> controla alguns especificadors de format. Per exemple, a <code>"en-US"</code>, <code>"MMM"</code> és <code>"Jan", "Feb", "Mar"…</code>, mentre que a <code>"ru-RU"</code>, <code>"MMM"</code> és <code>"янв", "фев", "мар"…</code>. Si <code>Format</code> té un valor <code>null</code>, <code>Culture</code> controla el format que s'utilitza per defecte. Si <code>Culture</code> té un valor <code>null</code> o s'omet, s'utilitza <code>Culture.Current</code>.</li></ul>Per admetre fluxos de treball de llegat, <code>options</code> també pot ser un valor de text. Té el mateix comportament que si <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Es converteix &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; en un valor de &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Es converteix amb un format personalitzat i la referència cultural alemanya.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Es converteix amb l’ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
