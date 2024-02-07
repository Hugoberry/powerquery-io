---
title: Web.BrowserContents
---

# Web.BrowserContents


Web ブラウザーで表示される、指定された URL の HTML を返します。


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

指定された <code>url</code> に関して、Web ブラウザーで表示されるとおりの HTML を返します。省略可能なレコード パラメーター <code>options</code> を設定して追加のプロパティを指定することもできます。レコードには、次のフィールドを含めることができます。     <ul>        <li><code>ApiKeyName</code>: 対象サイトに API キーの概念がある場合、このパラメーターを使用して、URL で使用する必要があるキー パラメーターの名前 (値ではありません) を指定できます。実際のキー値は資格情報で提供されています。</li>        <li><code>WaitFor</code>: ページの読み込みの待機 (必ず生じます) に加えて、HTML をダウンロードする前に待機する条件を指定します。Timeout および Selector のフィールド (あるいはその一方) を含むレコードとすることができます。Timeout のみを指定すると、関数は、HTML をダウンロードする前に、指定の時間待機します。Selector と Timeout の両方を指定した場合、ページに Selector が存在するようになる前に Timeout の有効期限が切れると、エラーがスローされます。Timeout を指定しないで Selector のみを指定すると、既定の Timeout である 30 秒が適用されます。</li>      </ul>    


## Examples

### Example #1 
https://microsoft.com の HTML を返します。
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
CSS セレクターが存在するようになるのを待ってから、https://microsoft.com の HTML を返します。
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
10 秒間待った後、https://microsoft.com の HTML を返します。
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
CSS セレクターが存在するようになるのを最大 10 秒待ってから、https://microsoft.com の HTML を返します。
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
データにアクセスしています
