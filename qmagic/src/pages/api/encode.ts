// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { encode } from 'urlencode';
import shellExec from 'shell-exec'

type Data = {
  qrcode: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  /*lzma.compress('<iframe width="100%"height="100%" src="https://near.qstnus.com/embed/NTBfMTcyX3ByaXZfNTBfcGtN" title="About Online payment processing platform" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', function(result: any) {
    console.log(result); // <Buffer fd 37 7a 58 5a 00 00 01 69 22 de 36 02 00 21 ...>
    const appResult = result.toString('base64')
    const appToEncode = 'https://itty.bitty.site/#/'+appResult;
  
    const qrCode = 'https://chart.googleapis.com/chart?cht=qr&chs=512x512&chld=L|1&choe=UTF-8&chl='+encode(appToEncode);
  
    res.status(200).json({ qrcode: qrCode })
});*/

const result = `'<iframe width="100%"height="100%" src="https://near.qstnus.com/embed/NTBfMTY3X3ByaXZfNTBfRzJk" title="About Online payment processing platform" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> </iframe>'`;

shellExec(`echo -n ${result} | lzma -9 | base64 -w0 | xargs -0 printf "https://itty.bitty.site/#/%s"`).then((resource:any) => {
  console.log(resource);

  const qrCode = 'https://chart.googleapis.com/chart?cht=qr&chs=512x512&chld=L|1&choe=UTF-8&chl='+encode(resource.stdout);
  
  res.status(200).json({ qrcode: qrCode })

  return;

}).catch(console.log)

//res.status(500).json({ qrcode: 'failed' })

}
