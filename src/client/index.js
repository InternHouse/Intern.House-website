import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './components/App';
import Homepage from './components/Homepage';


const root = ReactDOM.createRoot(
    document.getElementById("root")
);

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/homepage",
          element: <Homepage />
        }
      ],
    },
]);



root.render (
    <div>
      <Favicon url='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAaoAMABAAAAAEAAAAaAAAAAF4UmBQAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chle4QcAAAMXSURBVEgN7VNfSJNRFL/n3vvtc45os00MBKUo6KHoqYee6iEiwcxamhaxhfpST0a2zYgVTSsKH/pDmIIVzlZm1FtFL0UPFegg1NFLZEVFzWZpuX3fvbd7p4uZqySiJ8/LOfec3zm/7/6+cxGat3kF/rcCMFfC+IldG4gp+PhCe7R437n4n/pGW2v8mEDc3hRuV1j6p4ZM3Uq1WMoYf2pLvC/8dGz7CAD0MwFRwLSf5y0YcDZeeJPBKo8534wEjMhwbkTbvL5mjMm9/P2hJ6PHa9xgGPcREiVCiBKMUCViDJGJJEqEqt5zhKIc06tOf7gLySISinLKfiud2xPYYTAjDIDGdIu+NtJxbDjRWlMnTONiZsDPXmByx2GsKBvThx8JxlbJuz3GFJ9WvDlte31gtcnNTlmUKuGY1aQvFNDu7+lAhJzJ2aTAnG1M0KHniPEl8kb5SPD1PGWsyUnk9fpdRtK8KeXJlyyvqM1a2dUVnMwMt6dWNCJMpIS/MMGXyt7C7OqsZWhoaNA+JPk1CSyVJF/1PLolcj74rtZzaBmjiGqYJyAYfPu6ZXe1DSYfyy9emj1wdgyjwqL3zrpRPOVo45yvk39SUE3zRNpb+t3e5ooJlhxiTNSOTxoxJWtx4HKcUlIhAH2ZPXw6A/CZgbapwNf9bAaR2xuoMxnfq2BEsxzt7QxdV7HJjTK5EP1yZ1/LY4wZZrnKL/D1DIJGd8lQLtxMkwv3Vd6/3Hko/ERVfhC565vXmsw4q5IE494bnaEjKlaGEbhkoxU41pSXmaKpCkKOg1dvM0wOZ85pDyiJdb3S4Qs/yOTTRDvrmopZ0uwVAumA8YDN5fTI/yNnTplAYrncoJUciSLlZbZ0upR2i5ojLQJIJH0AMBCyVNubuu9mY6jHE8wbM771ccEXY4B3uo1WXDl1YGIGSCNBzpGDEhJFIF5iIK+y6/IxCuFauCfxMbFEvqO2An/4VnZdxbDV67vETLZbHQiGjr5LJ+tV/DcmrgUtUBVM5epV6/1Qo3RQrnOB1GokF2iuuV+RzLV/HjevwL9V4DsG5jEm+91fZAAAAABJRU5ErkJggg=='/>
      <RouterProvider router={router} />
    </div>
);