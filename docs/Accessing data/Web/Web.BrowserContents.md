---
title: Web.BrowserContents
---

# Web.BrowserContents


Returns the HTML for the specified URL, as viewed by a web browser.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Returns the HTML for the specified <code>url</code>, as viewed by a web browser. An optional record parameter, <code>options</code>, may be provided to specify additional properties. The record can contain the following fields:     <ul>        <li><code>ApiKeyName</code>: If the target site has a notion of an API key, this parameter can be used to specify the name (not the value) of the key parameter that must be used in the URL. The actual key value is provided in the credential.</li>        <li><code>WaitFor</code>: Specifies a condition to wait for before downloading the HTML, in addition to waiting for the page to load (which is always done). Can be a record containing Timeout and/or Selector fields. If only a Timeout is specified, the function will wait the amount of time specified before downloading the HTML. If both a Selector and Timeout are specified, and the Timeout elapses before the Selector exists on the page, an error will be thrown. If a Selector is specified with no Timeout, a default Timeout of 30 seconds is applied.</li>      </ul>    


## Examples

### Example #1 
Returns the HTML for https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
Returns the HTML for https://microsoft.com after waiting for a CSS selector to exist.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
Returns the HTML for https://microsoft.com after waiting ten seconds.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
Returns the HTML for https://microsoft.com after waiting up to ten seconds for a CSS selector to exist.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accessing data
