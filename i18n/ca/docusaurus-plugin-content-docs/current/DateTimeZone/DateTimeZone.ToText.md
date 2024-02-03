---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


## Description

Retorna una representació textual del valor datetimezone.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Details

Retorna una representació textual de <code>dateTimeZone</code>. Es pot indicar un paràmetre <code>record</code> opcional, <code>options</code>, per especificar més propietats. <code>culture</code> només s'utilitza per als fluxos de treball de llegat. L'element <code>record</code> pot contenir els camps següents:<ul>   <li><code>Format</code>: un valor de <code>text</code> que indica el format que s'utilitzarà. Per obtenir més informació, aneu a https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Si ometeu aquest camp o indiqueu un valor <code>null</code>, es donarà format a la data mitjançant el valor per defecte definit per <code>Culture</code>.</li>   <li><code>Culture</code>: si l'element <code>Format</code> no té un valor null, <code>Culture</code> controla alguns especificadors de format. Per exemple, a <code>"en-US"</code>, <code>"MMM"</code> és <code>"Jan", "Feb", "Mar"…</code>, mentre que a <code>"ru-RU"</code>, <code>"MMM"</code> és <code>"янв", "фев", "мар"…</code>. Si <code>Format</code> té un valor <code>null</code>, <code>Culture</code> controla el format que s'utilitza per defecte. Si <code>Culture</code> té un valor <code>null</code> o s'omet, s'utilitza <code>Culture.Current</code>.</li></ul>Per admetre fluxos de treball de llegat, <code>options</code> i <code>culture</code> també poden ser valors de text. Té el mateix comportament que si <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Converteix &lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; en un valor de &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Els resultats poden variar en funció de la referència cultural actual.&lt;/i&gt;
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2 
Es converteix amb un format personalitzat i la referència cultural alemanya.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3 
Converteix amb el patró ISO 8601.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
