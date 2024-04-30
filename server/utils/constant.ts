/** url for data scraping */
const targetUrl = `https://wms.cartografia.agenziaentrate.gov.it/`;
export const getAllRegioniQuery = targetUrl + `inspire/ajax/ajax.php?op=getRegioni`;
export const getAllProvinceFromRegioneQuery = (region: string) => targetUrl + `inspire/ajax/ajax.php?op=getProvince&reg=${region}`;
export const getAllComuniFromProvinciaQuery = (province: string) => targetUrl + `inspire/ajax/ajax.php?op=getComuniSez&prov=${province}`;