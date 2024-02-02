---
title: Web.Headers
---

# Web.Headers


## Description

Returns the HTTP headers downloaded from the url as a record value.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Returns the headers downloaded from <code>url</code> as a record. An optional record parameter, <code>options</code>, may be provided to specify additional properties. The record can contain the following fields:    <ul><li><code>Query</code> : Programmatically add query parameters to the URL without having to worry about escaping.</li><li><code>ApiKeyName</code> : If the target site has a notion of an API key, this parameter can be used to specify the name (not the value) of the key parameter that must be used in the URL. The actual key value is provided in the credential.</li><li><code>Headers</code> : Specifying this value as a record will supply additional headers to an HTTP request.</li><li><code>Timeout</code> : Specifying this value as a duration will change the timeout for an HTTP request. The default value is 100 seconds.</li><li><code>ExcludedFromCacheKey</code> : Specifying this value as a list will exclude these HTTP header keys from being part of the calculation for caching data.</li><li><code>IsRetry</code> : Specifying this logical value as true will ignore any existing response in the cache when fetching data.</li><li><code>ManualStatusHandling</code> : Specifying this value as a list will prevent any builtin handling for HTTP requests whose response has one of these status codes.</li><li><code>RelativePath</code> : Specifying this value as text appends it to the base URL before making the request.</li></ul>    The HTTP request is made with the HEAD method. Outside of a custom data connector context, only a subset of response headers is available (for security reasons).    


## Examples

### Example #1 
Retrieve the HTTP headers for &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; using the RelativePath and Query options.
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
