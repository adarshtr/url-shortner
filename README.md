# url-shortner
Generate shortned url from a given URL

# Running Project
```node server.js```

# Usage
Sample curl request to generate URL
```
curl -XPOST -H 'Content-Type: application/json' 'http://localhost:8000/api/url/shorten' -d '{"longUrl": "https://www.google.com/search?q=asdf&tbm=isch&source=hp&biw=1366&bih=637&ei=tBiEYOTQBJWKmgfX-aOACg&oq=asdf&gs_lcp=CgNpbWcQAzIFCAAQsQMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6CAgAELEDEIMBUN4LWL4NYL4OaABwAHgAgAG4AYgBigSSAQMwLjOYAQCgAQGqAQtnd3Mtd2l6LWltZw&sclient=img&ved=0ahUKEwjk-saP-pbwAhUVheYKHdf8CKAQ4dUDCAc&uact=5#imgrc=_vUHPFziTt3q9M"}'
```

Sample response

```
{ "_id": "60841982928e94289dc36a2e","longUrl": "https://www.google.com/search?q=asdf&tbm=isch&source=hp&biw=1366&bih=637&ei=tBiEYOTQBJWKmgfX-aOACg&oq=asdf&gs_lcp=CgNpbWcQAzIFCAAQsQMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6CAgAELEDEIMBUN4LWL4NYL4OaABwAHgAgAG4AYgBigSSAQMwLjOYAQCgAQGqAQtnd3Mtd2l6LWltZw&sclient=img&ved=0ahUKEwjk-saP-pbwAhUVheYKHdf8CKAQ4dUDCAc&uact=5#imgrc=_vUHPFziTt3q9M","shortUrl": "http://localhost:8000/2lA-TbTCg","urlCode": "2lA-TbTCg",
  "date": "Sat Apr 24 2021 18:43:38 GMT+0530 (India Standard Time)","__v": 0}
```


Alternatively, open `http://localhost:8000` and enter URL. 
