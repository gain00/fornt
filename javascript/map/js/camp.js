const camp = fetch(
  "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=1&pageNo=11&MobileOS=ETC&MobileApp=aa&serviceKey=bSb6HTOW2Dh6s8nfInv4Lm0ME8G29RduttMp5EO5bID16%2BYEL3CYXjz1mj10JEs3eGgH86m6Ol4S86MkXTWv1Q%3D%3D&_type=JSON"
);
const searchChargePlace = async (place) => {
    clusterer.clear();
    const charge = await fetch(
      `https://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList?page=1&perPage=1000&cond%5Baddr%3A%3ALIKE%5D=${place}&serviceKey=Wnus4QpirWGI56CfvzMWDIDHMRL%2FmEF%2FqTl9gwVNbRggLYTGPFIdwBy0L51B%2B27d5QRbLanNmIAxPwNvl7dKPA%3D%3D`
    );
    
