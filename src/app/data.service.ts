import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  user = [
    {
      ID: 'EB145F57-7FC1-F9A6-F265-1DEED58DA43C',
      Name: 'Molina, Forrest F.',
      status: ' Deactivated',
    },
    {
      ID: 'DF5AE811-0239-EF71-1BEC-1C95CB903ADF',
      Name: 'Compton, Jesse R.',
      status: ' Deactivated',
    },
    {
      ID: 'D7837814-A8BC-F338-825A-3D1E13EE502A',
      Name: 'Lott, Armand U.',
      status: ' Deactivated',
    },
    {
      ID: '081D6356-C16A-A96E-6F6A-A96D6E77C6C6',
      Name: 'Wooten, Len O.',
      status: ' Deactivated',
    },
    {
      ID: '86D3D81A-DA3E-9524-EC42-F03C26A39988',
      Name: 'Williamson, Lilah Q.',
      status: ' Deactivated',
    },
    {
      ID: '646CF18D-58C8-144F-0104-2C0D7E4967C5',
      Name: 'Frost, Oscar P.',
      status: ' Deactivated',
    },
    {
      ID: '9CAD7B64-FAD8-7EF9-3BC1-CF387C33E4E7',
      Name: 'Conway, Alana Y.',
      status: ' Deactivated',
    },
    {
      ID: '11FB69E0-7121-FAF3-D717-089F21AD356C',
      Name: 'Wilkerson, Beatrice E.',
      status: ' Deactivated',
    },
    {
      ID: 'B5EF579D-3C21-4266-905C-F99E8B63458D',
      Name: 'Schwartz, Hope Q.',
      status: 'Active ',
    },
    {
      ID: '5355E1B3-9760-F35F-DF2B-A36E314731E1',
      Name: 'Harrison, Blair T.',
      status: 'Active ',
    },
    {
      ID: '438B4DC9-1EB9-3E6B-9703-4F94464CB69B',
      Name: 'Holloway, Brock T.',
      status: ' Deactivated',
    },
    {
      ID: '06DA6F65-6DE6-93A9-EDE2-ED1ACCE64D71',
      Name: 'Garrison, Jada M.',
      status: 'Active ',
    },
    {
      ID: 'BD2C3F1D-FDEE-EF52-EACA-7252A4762B09',
      Name: 'Simmons, Ryan O.',
      status: ' Deactivated',
    },
    {
      ID: 'DC0CC276-E6F7-4503-B5E8-0C2D5C5FD3CB',
      Name: 'Alvarado, Merrill F.',
      status: ' Deactivated',
    },
    {
      ID: 'D268B636-2DFC-07BC-5E9F-111DDBFAEDEE',
      Name: 'Whitehead, Cassady J.',
      status: ' Deactivated',
    },
    {
      ID: '8AF68968-B753-2980-F8ED-2B767394901A',
      Name: 'Phillips, Rae A.',
      status: ' Deactivated',
    },
    {
      ID: '69C54D94-5B80-6F35-160E-C656A1B0E0AD',
      Name: 'Klein, Freya K.',
      status: 'Active ',
    },
    {
      ID: '001DCC25-CC87-2214-6D30-4499D63BB2FB',
      Name: 'Vazquez, Inga N.',
      status: ' Deactivated',
    },
    {
      ID: 'D0D91769-028E-71AC-F301-5ED2F659B129',
      Name: 'Savage, Adrian A.',
      status: 'Active ',
    },
    {
      ID: '6F493FD5-7D25-B4F9-501C-88BD8379233B',
      Name: 'Burns, Lyle C.',
      status: 'Active ',
    },
    {
      ID: '3E79EAB5-8A19-ADF5-3C04-6C7F645E2F77',
      Name: 'Gill, Carter U.',
      status: 'Active ',
    },
    {
      ID: 'E435BB93-18D9-4A6D-0B36-EEA37CAEEDA4',
      Name: 'Spears, Oprah Z.',
      status: 'Active ',
    },
    {
      ID: '45E4E9F9-F1E8-F17D-BD99-1C78BA690AAC',
      Name: 'Harding, Ralph T.',
      status: ' Deactivated',
    },
    {
      ID: 'ED685A3C-18CC-3262-087C-32CADCD9642D',
      Name: 'Potter, Dustin B.',
      status: ' Deactivated',
    },
    {
      ID: 'BCD39D38-00A9-E32C-25F8-D816F5745F4F',
      Name: 'Pruitt, Justine J.',
      status: 'Active ',
    },
    {
      ID: 'BAF21ECA-52E5-DE35-2E54-CA741134EF3B',
      Name: 'Pollard, Ora N.',
      status: 'Active ',
    },
    {
      ID: '0335FF84-23F1-FB7D-0C2A-2A19172C438D',
      Name: 'Osborn, Cynthia Z.',
      status: ' Deactivated',
    },
    {
      ID: 'D9521D36-E887-929E-02E1-BAED0A397FBF',
      Name: 'Hudson, Joan X.',
      status: 'Active ',
    },
    {
      ID: '4215EFF0-B3DA-30E8-47FD-7C5E988FF21F',
      Name: 'Spencer, Judah Q.',
      status: 'Active ',
    },
    {
      ID: '155645B8-F3FB-6903-4DBF-5A71EB431DBC',
      Name: 'Olson, Aurelia G.',
      status: 'Active ',
    },
    {
      ID: '95D125A8-1ED7-463A-BA5B-C3F440E1CBE8',
      Name: 'Mclaughlin, Lars W.',
      status: 'Active ',
    },
    {
      ID: '6B377129-4300-8EB0-86A5-8207A559515F',
      Name: 'Horn, Dean M.',
      status: ' Deactivated',
    },
    {
      ID: '1513A12E-CBA0-0A1B-E519-F21B715D1B85',
      Name: 'Sanders, Yuri V.',
      status: ' Deactivated',
    },
    {
      ID: 'ADDFAC04-1DDA-4253-3033-3CA9A6A82598',
      Name: 'Valentine, Harper F.',
      status: 'Active ',
    },
    {
      ID: 'B9B318DA-3024-3EA2-1E6D-A9BB26A6057D',
      Name: 'Dixon, Brandon L.',
      status: 'Active ',
    },
    {
      ID: '49EDD248-4170-D5C6-79A9-F82C614B9BFE',
      Name: 'Wynn, Cameran D.',
      status: ' Deactivated',
    },
    {
      ID: '24EA2916-6443-4732-4E63-6BD7848C8EC5',
      Name: 'Hewitt, May B.',
      status: ' Deactivated',
    },
    {
      ID: 'BA35FE3B-2134-8C8B-CECC-319B7E972131',
      Name: 'Carrillo, Ria I.',
      status: 'Active ',
    },
    {
      ID: 'C3C67EAA-EC15-2F0B-6794-4B697FCC4304',
      Name: 'Hartman, Shaine I.',
      status: 'Active ',
    },
    {
      ID: '980BE886-64B8-CBE8-43D6-10EBDB7DAEE2',
      Name: 'Cleveland, Neil F.',
      status: 'Active ',
    },
    {
      ID: 'CE0673D8-BE30-D591-8D3B-39E79D08D563',
      Name: 'Cooper, Daquan O.',
      status: 'Active ',
    },
    {
      ID: 'AE1F24A9-D326-0436-39D1-263D8D1681B2',
      Name: 'Avila, Griffin F.',
      status: ' Deactivated',
    },
    {
      ID: '469AE409-331E-5EE8-97E4-0DD08A3053BD',
      Name: 'Mclean, Imelda H.',
      status: 'Active ',
    },
    {
      ID: 'F28D10EC-66E3-760F-DF6E-2F5E6044C8CD',
      Name: 'Watson, Macaulay B.',
      status: ' Deactivated',
    },
    {
      ID: 'E2AB565F-9ECC-A73B-977D-2A54A6A3B6E8',
      Name: 'Hooper, Tana V.',
      status: ' Deactivated',
    },
    {
      ID: 'CF8B2A59-E5F9-51DB-9C03-911C714887B5',
      Name: 'Hudson, Owen X.',
      status: ' Deactivated',
    },
    {
      ID: '04B94332-27EB-1843-F201-E88BA982A0B9',
      Name: 'Chang, Sopoline G.',
      status: ' Deactivated',
    },
    {
      ID: 'FB2E7550-4033-60EC-AF6A-E946FBEDC4BC',
      Name: 'Edwards, Lysandra A.',
      status: ' Deactivated',
    },
    {
      ID: 'E3C38439-CA94-33A1-B286-BC172DEEB15C',
      Name: 'Byers, Carlos L.',
      status: 'Active ',
    },
    {
      ID: 'AF1EECA7-124C-E916-65E0-7E1B460E8143',
      Name: 'Michael, Jerry B.',
      status: ' Deactivated',
    },
    {
      ID: '23529F89-75AF-A787-16FD-52B987CF7F22',
      Name: 'Small, Clayton B.',
      status: ' Deactivated',
    },
    {
      ID: '2C2DDA14-E144-B46A-7A1A-6C3D143D4607',
      Name: 'Gillespie, Veda B.',
      status: 'Active ',
    },
    {
      ID: '708DBBFF-0EBD-6F39-3B1E-1513714BC127',
      Name: 'Sargent, Roary I.',
      status: ' Deactivated',
    },
    {
      ID: 'AD49E8BF-5A16-8602-64CC-D7BE702EE5C3',
      Name: 'Bray, Kimberley F.',
      status: ' Deactivated',
    },
    {
      ID: '64269188-CCB5-A117-0F34-E56A83EF761C',
      Name: 'Long, Caryn C.',
      status: 'Active ',
    },
    {
      ID: 'BCCE3828-2260-BC93-B8FB-3CE1B95F4AC8',
      Name: 'Chambers, Amanda V.',
      status: ' Deactivated',
    },
    {
      ID: 'F4E70CC0-305B-8A83-3B6B-DE87E6ABDE88',
      Name: 'Kline, Whilemina V.',
      status: ' Deactivated',
    },
    {
      ID: '84F476E4-73EC-7A8B-1AC4-7CAB851039BF',
      Name: 'Mann, Sydney S.',
      status: 'Active ',
    },
    {
      ID: 'ED1687E7-0A5B-6494-BDAA-3375FBF0068B',
      Name: 'Hester, James B.',
      status: 'Active ',
    },
    {
      ID: '225747C5-8E9E-28A2-BCC1-EF62DBAB6955',
      Name: 'Irwin, Celeste O.',
      status: ' Deactivated',
    },
    {
      ID: 'D4B94900-7C37-C732-0916-7F08F4D7D30F',
      Name: 'Bates, Colette E.',
      status: ' Deactivated',
    },
    {
      ID: 'A7BFAF33-1FF4-AFCA-F9BA-C44D5B66786D',
      Name: 'Mccarty, Eaton L.',
      status: 'Active ',
    },
    {
      ID: '899F2D92-1071-5A6B-6F3D-EFE8B0A1B2B5',
      Name: 'Prince, Salvador B.',
      status: ' Deactivated',
    },
    {
      ID: '56284199-F507-F837-C843-F60BB1BD09F0',
      Name: 'Dickerson, Martina K.',
      status: 'Active ',
    },
    {
      ID: '6AD97827-BDE7-CAC2-3528-6C9360067808',
      Name: 'Sparks, Keaton R.',
      status: 'Active ',
    },
    {
      ID: '2491C904-28A2-FD2C-CBFA-0BFB8336D0CA',
      Name: 'Humphrey, Daniel X.',
      status: ' Deactivated',
    },
    {
      ID: '794FAD56-81D6-D0FD-490E-12777FA5DC5B',
      Name: 'Cameron, Veda N.',
      status: 'Active ',
    },
    {
      ID: '1973D864-95F3-22F6-5377-401CF3471DF1',
      Name: 'Mcgowan, Dana E.',
      status: ' Deactivated',
    },
    {
      ID: '0CE0EE6A-B413-46D3-7EC4-AFC4A55772A0',
      Name: 'Diaz, Raymond G.',
      status: 'Active ',
    },
    {
      ID: '8E65B4EA-9A51-71C9-D9F0-C5540808CD42',
      Name: 'Watts, Sigourney T.',
      status: ' Deactivated',
    },
    {
      ID: 'B5399B03-0EEE-AC63-6C24-7F146B1E86D9',
      Name: 'Gould, Adrienne D.',
      status: ' Deactivated',
    },
    {
      ID: '54E30479-0B25-9AA5-15A9-0FAB83306AA2',
      Name: 'Whitfield, Mari S.',
      status: 'Active ',
    },
    {
      ID: 'B78FD202-F13E-31F5-5B44-61837978FF54',
      Name: 'Singleton, Kyla F.',
      status: 'Active ',
    },
    {
      ID: '1AF579AB-521E-B243-872C-CD438A8AE52E',
      Name: 'Conner, Jessamine C.',
      status: ' Deactivated',
    },
    {
      ID: '088D598E-67E6-CA2E-BF77-695F30A607C0',
      Name: 'Hinton, Hanna H.',
      status: ' Deactivated',
    },
    {
      ID: '31EA0CD7-BC13-428F-4041-50DF3AD441C2',
      Name: 'Cross, Griffin V.',
      status: ' Deactivated',
    },
    {
      ID: '9A8C6974-E8E5-0EA1-3138-D9B363041906',
      Name: 'Harrington, Callie T.',
      status: ' Deactivated',
    },
    {
      ID: 'EE476B0D-84C7-039D-8E40-EA29DFDD26D1',
      Name: 'Chaney, Luke T.',
      status: 'Active ',
    },
    {
      ID: '43DFC276-E9F9-5896-253B-394945380564',
      Name: 'Griffin, Simon G.',
      status: 'Active ',
    },
    {
      ID: 'BFB2044B-CBB6-851E-5DBC-1AF0834C75F0',
      Name: 'Mejia, Macon N.',
      status: ' Deactivated',
    },
    {
      ID: '0F7D6711-9BCA-7C41-FDD4-7DAB1F4A9B22',
      Name: 'Ramsey, Burton W.',
      status: 'Active ',
    },
    {
      ID: '357073E2-1B42-44B7-6204-E362421F0DBA',
      Name: 'Chan, Orla B.',
      status: 'Active ',
    },
    {
      ID: 'DA8F756A-51E9-525E-C9BB-4A5A1D983A6B',
      Name: 'Holloway, Macaulay H.',
      status: ' Deactivated',
    },
    {
      ID: '4D60A882-3501-2FEC-DCF6-3A44A059CD80',
      Name: 'Tillman, Lucian Z.',
      status: 'Active ',
    },
    {
      ID: '416EF2D0-D3DC-7350-3CC7-4119D5C0B1A0',
      Name: 'Skinner, Jakeem H.',
      status: ' Deactivated',
    },
    {
      ID: '9E8EC49C-B623-B7CE-E9A0-51981C8BD1E0',
      Name: 'Black, Jackson N.',
      status: 'Active ',
    },
    {
      ID: '21525D47-3919-79D4-F925-F966419A31A6',
      Name: 'Gentry, Patrick O.',
      status: 'Active ',
    },
    {
      ID: 'AC7A9E6A-628E-97DC-84CB-DE8C9FB35563',
      Name: 'Mueller, Alisa F.',
      status: 'Active ',
    },
    {
      ID: '6B762189-EB32-9132-DDB2-DCC27A9200A2',
      Name: 'Franklin, Xenos L.',
      status: 'Active ',
    },
    {
      ID: 'BB0D2DE2-050D-6B26-AACE-A2F55A810FDD',
      Name: 'Herring, Callie O.',
      status: ' Deactivated',
    },
    {
      ID: '1CE92CA1-F1CD-A3A1-AD45-56C493CF23C9',
      Name: 'Haney, Tashya X.',
      status: ' Deactivated',
    },
    {
      ID: '35E5C6A5-7129-486B-AB53-7F8FDB944948',
      Name: 'George, Vivien P.',
      status: 'Active ',
    },
    {
      ID: 'B7E304EB-6CF7-D974-D7AB-CF13FDA4500E',
      Name: 'Bartlett, Quon R.',
      status: ' Deactivated',
    },
    {
      ID: '4A7CBBCE-9708-3C98-B66A-A1405C466727',
      Name: 'Griffith, Kibo G.',
      status: ' Deactivated',
    },
    {
      ID: '31E3170E-F3C4-131F-C371-03F4E8266CE3',
      Name: 'Tyson, Damian N.',
      status: 'Active ',
    },
    {
      ID: '68277327-2E07-37DF-1CFF-D3BF778B3B04',
      Name: 'Stevenson, Heidi R.',
      status: ' Deactivated',
    },
    {
      ID: '288CD3B6-D256-1AE3-CFBB-90FD7092840B',
      Name: 'Rich, Uta D.',
      status: 'Active ',
    },
    {
      ID: '58BC2E36-C416-606C-31D4-FAC4E5C5E25F',
      Name: 'Stuart, Elijah G.',
      status: 'Active ',
    },
    {
      ID: '148245D2-4630-B506-793F-9280B6955D18',
      Name: 'Gates, Colorado V.',
      status: ' Deactivated',
    },
    {
      ID: 'ED32567F-8348-F302-8125-BEB39A5F9AC9',
      Name: 'Conley, Macy F.',
      status: 'Active ',
    },
  ];
  productSold = [
    {
      id: '00B82219-BA9F-B6D2-AE2E-C7CDFA3AB676',
      productName: ' Television ',
      soldCount: 22,
      month: ' Jul ',
    },
    {
      id: '93E67D50-6C22-D619-B378-4F0DD643BD8A',
      productName: 'Dishwashers ',
      soldCount: 35,
      month: ' Aug ',
    },
    {
      id: '0CD3C90F-30E5-6ED3-49BB-5015321A79E9',
      productName: ' Television ',
      soldCount: 48,
      month: ' Jul ',
    },
    {
      id: 'CEB0EF32-E46E-5401-5EBD-952DF9284B5F',
      productName: ' Washing Machine ',
      soldCount: 41,
      month: ' Mar ',
    },
    {
      id: '6E9F304A-B1AC-6E8C-84B9-8797932599CE',
      productName: 'Dishwashers ',
      soldCount: 10,
      month: ' Feb ',
    },
    {
      id: 'BF557193-8946-C25E-DD11-9A46738F998C',
      productName: ' Television ',
      soldCount: 77,
      month: ' May ',
    },
    {
      id: '5B9FB316-5F87-32F8-2828-810490A54896',
      productName: ' Television ',
      soldCount: 27,
      month: ' Feb ',
    },
    {
      id: '6EAE4B16-D6ED-62E9-B39B-D1DCD4474346',
      productName: ' Television ',
      soldCount: 74,
      month: 'Jan ',
    },
    {
      id: '73147CCA-9BFF-CC87-2E13-FC9C8168568C',
      productName: ' Television ',
      soldCount: 50,
      month: ' Apr ',
    },
    {
      id: 'B251A6B4-602D-37DC-A5DE-060AD5B2BEAE',
      productName: ' Washing Machine ',
      soldCount: 87,
      month: ' Sep',
    },
    {
      id: '2348A3D9-250F-06A5-BE6E-94D29A982748',
      productName: ' Refrigerator',
      soldCount: 40,
      month: ' Jul ',
    },
    {
      id: '9C6E4407-3B74-BB3D-1439-C35B8D6E7E50',
      productName: 'Dishwashers ',
      soldCount: 46,
      month: 'Jan ',
    },
    {
      id: 'FEF342E8-FA1D-088D-BA34-16389C215B6E',
      productName: 'Dishwashers ',
      soldCount: 96,
      month: ' Jul ',
    },
    {
      id: '7F0E6177-749C-793C-BBB5-43FD68A39F60',
      productName: ' Refrigerator',
      soldCount: 34,
      month: 'Jan ',
    },
    {
      id: 'BA933B15-1BE3-9CFE-8F2D-11FE6ADE507C',
      productName: ' Television ',
      soldCount: 91,
      month: 'Jan ',
    },
    {
      id: '769D1412-A87D-1729-79F5-FB966A6C971C',
      productName: ' Washing Machine ',
      soldCount: 80,
      month: ' May ',
    },
    {
      id: 'A1DE2760-51AB-DEBF-1428-937BF0D2945A',
      productName: ' Washing Machine ',
      soldCount: 94,
      month: ' Apr ',
    },
    {
      id: 'C6C3D72F-B4B0-0B35-90D0-68F7A3ADD29B',
      productName: ' Television ',
      soldCount: 15,
      month: ' Apr ',
    },
    {
      id: 'A1FC71E3-2026-DB87-D3F3-B5348A60869B',
      productName: 'Dishwashers ',
      soldCount: 56,
      month: ' Mar ',
    },
    {
      id: 'A6B2041E-8963-E971-FAF6-19999699C581',
      productName: ' Television ',
      soldCount: 2,
      month: 'Jan ',
    },
    {
      id: '391801FA-4F6B-13CD-B015-796718FCF178',
      productName: ' Television ',
      soldCount: 76,
      month: ' Apr ',
    },
    {
      id: 'C33FEC90-663C-DF20-A07C-6BFBC6C2C4FB',
      productName: ' Refrigerator',
      soldCount: 14,
      month: ' Jul ',
    },
    {
      id: '5606EAC2-B93A-507C-216E-7A8F087C758D',
      productName: ' Television ',
      soldCount: 97,
      month: ' Apr ',
    },
    {
      id: '26DFF58D-E12F-845F-6E53-C7DAB0BA3B0B',
      productName: ' Refrigerator',
      soldCount: 64,
      month: ' Feb ',
    },
    {
      id: '1763AF65-168A-EC95-9B12-299407F98A5B',
      productName: ' Refrigerator',
      soldCount: 99,
      month: ' Mar ',
    },
    {
      id: '6029A8F0-687D-9B23-C27F-D1DADFDCE172',
      productName: ' Television ',
      soldCount: 3,
      month: ' May ',
    },
    {
      id: '97AA794E-5418-20E2-0D84-4FA710EFDEE7',
      productName: 'Dishwashers ',
      soldCount: 88,
      month: ' Sep',
    },
    {
      id: '4BD00B93-3CF8-94A3-AA86-4F4BD7D645FC',
      productName: 'Dishwashers ',
      soldCount: 38,
      month: ' Aug ',
    },
    {
      id: '5E318770-B474-6409-341A-DA207DCBBA33',
      productName: ' Television ',
      soldCount: 61,
      month: ' Mar ',
    },
    {
      id: '06D0C38C-C6C7-3B90-5F9C-9EDCF97AA03F',
      productName: ' Washing Machine ',
      soldCount: 93,
      month: ' May ',
    },
    {
      id: '2A42EC5F-706C-40A7-C07E-7C2B065E6841',
      productName: ' Washing Machine ',
      soldCount: 46,
      month: ' Feb ',
    },
    {
      id: '1E739D3E-2973-5BEC-E4FB-2DE39107F315',
      productName: ' Television ',
      soldCount: 50,
      month: ' Sep',
    },
    {
      id: '9F0C5635-1376-9F9C-1FF7-78DF5FA08CD3',
      productName: ' Refrigerator',
      soldCount: 64,
      month: ' Jul ',
    },
    {
      id: 'DE7CC7F8-CE36-1A68-3946-7325770E6C05',
      productName: ' Washing Machine ',
      soldCount: 71,
      month: ' Aug ',
    },
    {
      id: 'A8271C04-A63E-8829-EF68-67BDE2532D98',
      productName: 'Dishwashers ',
      soldCount: 10,
      month: ' Feb ',
    },
    {
      id: 'EA0CBDCA-E005-C268-881D-56C039D5DD5A',
      productName: ' Refrigerator',
      soldCount: 20,
      month: ' Jun ',
    },
    {
      id: 'CC2FF03C-35BE-EC0D-E5C9-5B37BE51FA89',
      productName: ' Washing Machine ',
      soldCount: 11,
      month: ' Jul ',
    },
    {
      id: 'E124048D-43EF-E7E1-A899-9E60F6476F8A',
      productName: ' Washing Machine ',
      soldCount: 2,
      month: ' Sep',
    },
    {
      id: '546B20E4-4E4B-A422-63F2-36C46759C0FB',
      productName: ' Washing Machine ',
      soldCount: 63,
      month: ' Feb ',
    },
    {
      id: 'C8B19C3B-3632-4A21-C73F-AC7E0F3B87FE',
      productName: ' Refrigerator',
      soldCount: 13,
      month: ' Jul ',
    },
    {
      id: 'C6965FC7-3290-4E47-796F-0A6FB8738D38',
      productName: ' Television ',
      soldCount: 13,
      month: ' Apr ',
    },
    {
      id: 'F400986E-C987-AB54-4408-D21D80F43610',
      productName: ' Refrigerator',
      soldCount: 81,
      month: 'Jan ',
    },
    {
      id: '94517780-B0F5-19DA-79A0-7C75F0F02763',
      productName: 'Dishwashers ',
      soldCount: 31,
      month: ' May ',
    },
    {
      id: 'F6C978B1-9183-C0AD-7423-91BF72298231',
      productName: ' Washing Machine ',
      soldCount: 50,
      month: ' Feb ',
    },
    {
      id: '7F1A95F1-D589-C71A-8DAA-835FE7A527B2',
      productName: ' Washing Machine ',
      soldCount: 17,
      month: ' Apr ',
    },
    {
      id: 'CBEF77AA-3C2F-EB07-D36C-086FE9600ED4',
      productName: ' Refrigerator',
      soldCount: 83,
      month: ' Mar ',
    },
    {
      id: '5549D50F-0F8A-3C1E-2EFF-3FE4275C45BF',
      productName: 'Dishwashers ',
      soldCount: 54,
      month: ' May ',
    },
    {
      id: 'D711A759-350A-5F69-59C8-0550C5472F5B',
      productName: ' Washing Machine ',
      soldCount: 27,
      month: ' Aug ',
    },
    {
      id: '7DCC4966-2846-D1B0-7449-0CC270E2A961',
      productName: ' Refrigerator',
      soldCount: 55,
      month: ' Aug ',
    },
    {
      id: '8174D8A8-1CE7-F2FA-E73A-81FAB4CB8412',
      productName: ' Washing Machine ',
      soldCount: 23,
      month: ' Sep',
    },
    {
      id: '975C9510-1296-A1C6-6D5F-3076B5D2AF24',
      productName: ' Washing Machine ',
      soldCount: 96,
      month: ' May ',
    },
    {
      id: 'C964F25A-B1EF-53FB-2E07-21EAEDF04A70',
      productName: ' Washing Machine ',
      soldCount: 14,
      month: ' May ',
    },
    {
      id: '55BF5757-381D-E649-3A8D-5010BB246B6E',
      productName: ' Washing Machine ',
      soldCount: 43,
      month: ' Jun ',
    },
    {
      id: 'C74489BB-3C0D-3F55-4598-55712E5FE6FE',
      productName: ' Refrigerator',
      soldCount: 8,
      month: ' Feb ',
    },
    {
      id: '5974A734-09A1-7B25-48E4-6B74A0C5E118',
      productName: ' Television ',
      soldCount: 15,
      month: ' Jul ',
    },
    {
      id: '9527DFC8-50C2-C5C3-F262-98565E32BFA5',
      productName: ' Refrigerator',
      soldCount: 51,
      month: ' Aug ',
    },
    {
      id: 'C09F04E4-3238-1497-20A4-5BECBA841C97',
      productName: ' Refrigerator',
      soldCount: 31,
      month: ' Aug ',
    },
    {
      id: '6C03D5C5-105A-5B07-1630-ED37035828D9',
      productName: ' Washing Machine ',
      soldCount: 2,
      month: ' Aug ',
    },
    {
      id: 'E7E3CEFE-C973-9C18-6646-9276E390E5DD',
      productName: ' Television ',
      soldCount: 36,
      month: ' Aug ',
    },
    {
      id: '3513389A-BE17-DE12-8822-8B9FC9B4B3F8',
      productName: ' Refrigerator',
      soldCount: 8,
      month: ' Apr ',
    },
    {
      id: '5E81A419-5625-ED57-187B-6130955180C1',
      productName: ' Refrigerator',
      soldCount: 36,
      month: ' Mar ',
    },
    {
      id: 'A9C15FCD-9F4C-DC5C-7E4B-FDCE62F0D987',
      productName: 'Dishwashers ',
      soldCount: 5,
      month: ' Jul ',
    },
    {
      id: '3175BCEE-0830-3B93-D31A-18843FE23A9B',
      productName: ' Refrigerator',
      soldCount: 80,
      month: ' Mar ',
    },
    {
      id: '91D7E52A-E480-67BE-D799-5E62EC46BE70',
      productName: 'Dishwashers ',
      soldCount: 8,
      month: ' Feb ',
    },
    {
      id: 'FA61642D-4026-33B0-9077-F773E3CDAB16',
      productName: ' Television ',
      soldCount: 80,
      month: ' Apr ',
    },
    {
      id: '7D8EBF44-A079-E7FA-4585-3250DA9361AA',
      productName: 'Dishwashers ',
      soldCount: 47,
      month: ' Jul ',
    },
    {
      id: '375DF217-D581-E6D0-ABD4-8EAC7AA46AA5',
      productName: ' Washing Machine ',
      soldCount: 61,
      month: 'Jan ',
    },
    {
      id: '1BCB4B9A-863F-F3D8-5D11-7B420F949392',
      productName: ' Television ',
      soldCount: 75,
      month: ' Sep',
    },
    {
      id: '83EE3C98-C973-FAD9-9092-A1905F9270E7',
      productName: ' Television ',
      soldCount: 80,
      month: ' Sep',
    },
    {
      id: '0C6BB65F-6E11-574A-DB04-3771C42C597D',
      productName: ' Washing Machine ',
      soldCount: 48,
      month: ' Jul ',
    },
    {
      id: '0B0D872A-3055-D54A-CDA6-7819C7ACEC28',
      productName: ' Washing Machine ',
      soldCount: 71,
      month: ' Jul ',
    },
    {
      id: '7549D12E-AA5A-EAFC-C674-F997F3A9ED4A',
      productName: 'Dishwashers ',
      soldCount: 71,
      month: ' Apr ',
    },
    {
      id: '5E3C7F31-5AD2-0686-0492-A94127566BC2',
      productName: ' Television ',
      soldCount: 28,
      month: ' Apr ',
    },
    {
      id: '8D64B5EE-6F2A-125D-21D1-8F5EC74A7AC1',
      productName: 'Dishwashers ',
      soldCount: 50,
      month: ' Jun ',
    },
    {
      id: '976DA4CD-9A32-3FEC-48D7-425A868214D2',
      productName: ' Washing Machine ',
      soldCount: 89,
      month: ' Feb ',
    },
    {
      id: '98540E59-E1FE-D41C-F6D7-1A5B88CC18DA',
      productName: ' Washing Machine ',
      soldCount: 53,
      month: ' Jul ',
    },
    {
      id: 'D5292F83-F217-2C14-A019-15AEF715F2BB',
      productName: ' Washing Machine ',
      soldCount: 84,
      month: ' Sep',
    },
    {
      id: '56F5D399-8E1C-FD57-3E43-28BBFE900B2B',
      productName: ' Refrigerator',
      soldCount: 17,
      month: ' Apr ',
    },
    {
      id: 'B04DE8B6-AB53-E7AB-5D72-28AE5168D0E2',
      productName: ' Refrigerator',
      soldCount: 61,
      month: ' Sep',
    },
    {
      id: 'BD81F9B4-B314-BA17-CC76-B50E4E61C6DA',
      productName: ' Washing Machine ',
      soldCount: 82,
      month: 'Jan ',
    },
    {
      id: '8FCF2BE6-BEA8-6FFF-8419-5276CCB39D8D',
      productName: 'Dishwashers ',
      soldCount: 67,
      month: ' Aug ',
    },
    {
      id: 'C0BE940C-74C1-7E74-F566-F545C1004DC1',
      productName: ' Washing Machine ',
      soldCount: 60,
      month: ' Sep',
    },
    {
      id: '77644CBB-A4C9-E6D4-2181-3CAAB84526F4',
      productName: 'Dishwashers ',
      soldCount: 34,
      month: ' Feb ',
    },
    {
      id: 'B07CBDDE-B8E7-DCCA-0365-BB2E1FBF581D',
      productName: ' Washing Machine ',
      soldCount: 30,
      month: ' Feb ',
    },
    {
      id: 'C9D2D104-F813-0C1E-70F7-C368FDA0D0D2',
      productName: ' Television ',
      soldCount: 39,
      month: ' Apr ',
    },
    {
      id: '1F4227C7-0A47-4FFA-2F48-466D54840D35',
      productName: ' Washing Machine ',
      soldCount: 90,
      month: ' Feb ',
    },
    {
      id: '771A1143-62D4-C5D5-3BAA-613808115590',
      productName: ' Washing Machine ',
      soldCount: 70,
      month: 'Jan ',
    },
    {
      id: '4DA69763-C727-5BEF-7166-F7B795339F31',
      productName: 'Dishwashers ',
      soldCount: 100,
      month: ' Sep',
    },
    {
      id: '8E9637DF-9B2F-302F-AD22-FE997BD0C685',
      productName: ' Refrigerator',
      soldCount: 32,
      month: ' Sep',
    },
    {
      id: '23D3423E-727C-63F3-0E54-764EC987FBDF',
      productName: ' Refrigerator',
      soldCount: 32,
      month: ' Feb ',
    },
    {
      id: 'DE4A9A37-D056-541D-0115-4D13881FDE31',
      productName: ' Television ',
      soldCount: 61,
      month: ' Aug ',
    },
    {
      id: 'F73A9309-E8BC-A188-DB8D-AAD943B6123F',
      productName: 'Dishwashers ',
      soldCount: 5,
      month: ' Jul ',
    },
    {
      id: 'EEA78235-95B6-8AF1-3CDC-D3BA5B0A90B6',
      productName: ' Washing Machine ',
      soldCount: 12,
      month: ' Jul ',
    },
    {
      id: 'E72DF534-FF4E-CBE8-E60E-EF4FD7AC2686',
      productName: ' Refrigerator',
      soldCount: 90,
      month: ' Jul ',
    },
    {
      id: '3BA81A76-2263-507A-D069-E4DAD0594C07',
      productName: ' Washing Machine ',
      soldCount: 96,
      month: ' Apr ',
    },
    {
      id: '61FC59B3-FDDB-9A9E-1D65-172889F2A2BF',
      productName: 'Dishwashers ',
      soldCount: 31,
      month: ' Sep',
    },
    {
      id: 'AFD6EE11-C0D8-7379-6002-979C6FF7EE71',
      productName: ' Refrigerator',
      soldCount: 44,
      month: ' Mar ',
    },
    {
      id: 'DC31F497-8A07-DE36-04D7-1A1B1EC452FB',
      productName: ' Refrigerator',
      soldCount: 54,
      month: ' Apr ',
    },
    {
      id: '8E64F9A0-428D-5187-8F08-80E272C36E94',
      productName: 'Dishwashers ',
      soldCount: 65,
      month: ' Apr ',
    },
    {
      id: '959CC7F3-587A-D01C-F4A0-DB36DFB2BDA1',
      productName: ' Refrigerator',
      soldCount: 43,
      month: ' Aug ',
    },
  ];
  deliveryStatus = [
    {
      id: '39C40524-6043-8ED4-4564-6C6D1DF4CFE5',
      productName: ' Washing Machine ',
      deliveryStatus: ' Canceled',
    },
    {
      id: '046C98A2-6A43-D056-D3E3-17B76FCEEF18',
      productName: ' Washing Machine ',
      deliveryStatus: ' Canceled',
    },
    {
      id: 'B3C829B4-C69B-9018-5D1A-9C18332B4A62',
      productName: ' Washing Machine ',
      deliveryStatus: ' In progress ',
    },
    {
      id: 'F740ED8B-90B1-A02B-7E29-6F1601B0D39A',
      productName: ' Washing Machine ',
      deliveryStatus: 'Completed ',
    },
    {
      id: '1340849F-5AC2-7394-2307-C96EDB41FBE5',
      productName: ' Refrigerator',
      deliveryStatus: 'Completed ',
    },
    {
      id: 'FB7B3B93-8997-0853-21B1-0CD2DCB714BE',
      productName: ' Television ',
      deliveryStatus: ' Canceled',
    },
    {
      id: '3E33B3D8-617E-E790-6375-B7A5F41A40E1',
      productName: ' Refrigerator',
      deliveryStatus: ' Canceled',
    },
    {
      id: '9E035967-B2E1-C075-6FC3-75DD7A60D06B',
      productName: ' Television ',
      deliveryStatus: ' Canceled',
    },
    {
      id: 'F7B7CFFF-369A-347D-2B2D-5F9F91053342',
      productName: ' Refrigerator',
      deliveryStatus: ' In progress ',
    },
    {
      id: 'B89FCF46-8AA0-C46E-AA94-6B79191803CD',
      productName: ' Television ',
      deliveryStatus: ' Canceled',
    },
    {
      id: 'A22896BD-6CA4-C973-82FF-A37F9BA93275',
      productName: ' Refrigerator',
      deliveryStatus: 'Completed ',
    },
    {
      id: 'D1BA2B3C-52CD-BFF9-0189-101CDF80142D',
      productName: ' Washing Machine ',
      deliveryStatus: ' Canceled',
    },
    {
      id: '96D2616F-F1F7-43A7-1424-C46955677890',
      productName: 'Dishwashers ',
      deliveryStatus: 'Completed ',
    },
    {
      id: '18AB05E7-1B33-EA46-1D58-EAFD38882BA6',
      productName: ' Washing Machine ',
      deliveryStatus: 'Completed ',
    },
    {
      id: 'B8165D5A-CD8A-E6BD-8DEA-89BA6B2FF76F',
      productName: ' Washing Machine ',
      deliveryStatus: 'Completed ',
    },
    {
      id: 'A87C29FB-2674-2DEF-47C6-EF5A599E2669',
      productName: 'Dishwashers ',
      deliveryStatus: 'Completed ',
    },
    {
      id: '43409906-8AD3-92B8-C461-92F18AD1A3E3',
      productName: ' Refrigerator',
      deliveryStatus: ' In progress ',
    },
    {
      id: '716F0C09-8055-2B8D-37F5-B7DF27B4E437',
      productName: 'Dishwashers ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '5CDE32D9-AEFB-3952-1758-37654D2308A0',
      productName: ' Washing Machine ',
      deliveryStatus: ' Canceled',
    },
    {
      id: 'A0AA509B-B287-CCAE-3565-A03DF4F4A4A6',
      productName: ' Washing Machine ',
      deliveryStatus: ' In progress ',
    },
    {
      id: 'F9A8CCF8-2DB9-118C-8DC7-3FEA0DF8C8A3',
      productName: ' Television ',
      deliveryStatus: ' Canceled',
    },
    {
      id: '51D95DA2-05C2-B37E-BAD7-BDADB632EB3E',
      productName: 'Dishwashers ',
      deliveryStatus: 'Completed ',
    },
    {
      id: '70457745-6956-70E5-1D8E-D27C4C9207AA',
      productName: ' Refrigerator',
      deliveryStatus: ' Canceled',
    },
    {
      id: '279D56CB-ACA8-1C59-09A7-4ECCD1CF2A66',
      productName: ' Washing Machine ',
      deliveryStatus: 'Completed ',
    },
    {
      id: 'BE727E10-BF0F-9A9B-1203-4B13481BF4D0',
      productName: ' Refrigerator',
      deliveryStatus: ' Canceled',
    },
    {
      id: '775D826D-86B5-851C-105C-2586210F1983',
      productName: ' Refrigerator',
      deliveryStatus: 'Completed ',
    },
    {
      id: '8C80FBF3-F2F8-3FA3-888F-0E4E835C77ED',
      productName: ' Refrigerator',
      deliveryStatus: ' In progress ',
    },
    {
      id: '4BB94CFF-5F7A-07C3-9032-1A25BF5B281E',
      productName: 'Dishwashers ',
      deliveryStatus: ' Canceled',
    },
    {
      id: 'B09CBEFC-50AA-977F-4302-13EF81F06EC1',
      productName: 'Dishwashers ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '5CD62BA9-1A65-0E9F-F09E-4F1D8DB1508C',
      productName: ' Television ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '1DFB05A5-DF0D-ECF2-702F-CEBF91AA235A',
      productName: ' Refrigerator',
      deliveryStatus: ' Canceled',
    },
    {
      id: 'A8435F69-459B-72CA-B140-204568B98DB5',
      productName: 'Dishwashers ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '8F89CE18-3CE6-EFC9-F460-AA6E89CC9B30',
      productName: 'Dishwashers ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '3F065BCF-0D69-1A6A-4E8B-75B03457D5EE',
      productName: 'Dishwashers ',
      deliveryStatus: 'Completed ',
    },
    {
      id: '2A3C49A4-7D63-4A3A-1784-4E49B89269A6',
      productName: ' Television ',
      deliveryStatus: 'Completed ',
    },
    {
      id: '8512D3A0-B318-5ECE-EF25-14B28AA5E549',
      productName: ' Television ',
      deliveryStatus: ' In progress ',
    },
    {
      id: 'F4FC6DD4-8903-9F8F-BE51-AC7F31764E59',
      productName: ' Television ',
      deliveryStatus: ' In progress ',
    },
    {
      id: 'CD2949E3-A1E9-02C2-D08A-EAB6B713DB08',
      productName: ' Refrigerator',
      deliveryStatus: ' In progress ',
    },
    {
      id: '9966B70D-B83F-3E16-5011-2D7A08368C8D',
      productName: ' Washing Machine ',
      deliveryStatus: ' Canceled',
    },
    {
      id: 'E4DF2D28-7850-8607-5EB2-488E3AA910DA',
      productName: 'Dishwashers ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '3C116488-7313-7C29-15CA-1B1FCDC99EEE',
      productName: ' Refrigerator',
      deliveryStatus: ' In progress ',
    },
    {
      id: 'E6F0B198-8B23-EB26-ADFA-E781589118D0',
      productName: ' Refrigerator',
      deliveryStatus: 'Completed ',
    },
    {
      id: '9022ED92-D538-116F-116A-E9D6DE39C942',
      productName: ' Refrigerator',
      deliveryStatus: ' In progress ',
    },
    {
      id: 'B38C654B-D2D0-CA1D-9D91-65EB4464C97A',
      productName: 'Dishwashers ',
      deliveryStatus: 'Completed ',
    },
    {
      id: 'E19D6AA2-8BE0-0028-0D99-100AD425443B',
      productName: ' Washing Machine ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '2D513EC0-89D6-9DEB-CBFE-FB9F48B2F36E',
      productName: ' Television ',
      deliveryStatus: 'Completed ',
    },
    {
      id: '8F8BC43D-94FF-2E28-9B01-51DBD86FD099',
      productName: ' Television ',
      deliveryStatus: 'Completed ',
    },
    {
      id: '427B75F8-82CE-985A-0337-DE4883E55063',
      productName: ' Washing Machine ',
      deliveryStatus: 'Completed ',
    },
    {
      id: 'F7A42C8B-EEDD-ED99-F6DB-F65E94A844C1',
      productName: ' Television ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '2B73A803-2C9E-9A7B-D064-7CC89A4C0DC2',
      productName: ' Television ',
      deliveryStatus: ' Canceled',
    },
    {
      id: 'EDBBD5C4-A4F3-BED1-75AB-9EE94BD0FB94',
      productName: ' Washing Machine ',
      deliveryStatus: ' Canceled',
    },
    {
      id: '0EA30C6F-DEC9-35C0-28ED-E36E20D00520',
      productName: 'Dishwashers ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '19B1BAB5-DF22-28E8-F1D6-C25FB44DDC29',
      productName: ' Refrigerator',
      deliveryStatus: 'Completed ',
    },
    {
      id: '7D98DFF6-9CC3-08D0-9F31-79999E5827BE',
      productName: ' Refrigerator',
      deliveryStatus: 'Completed ',
    },
    {
      id: 'A4D6CCA1-52EC-4A4F-3CCF-00119BFCCC1C',
      productName: ' Television ',
      deliveryStatus: 'Completed ',
    },
    {
      id: '045CD21A-2C19-5084-8CE3-0B7502CE4E59',
      productName: ' Refrigerator',
      deliveryStatus: ' Canceled',
    },
    {
      id: 'C899A9A4-9942-CCB7-FDB0-483B5127A077',
      productName: 'Dishwashers ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '610C03F0-0524-F127-CE80-DDEE99223621',
      productName: 'Dishwashers ',
      deliveryStatus: 'Completed ',
    },
    {
      id: '8318BD5C-4F8F-FD45-E93E-A8F0752706A2',
      productName: 'Dishwashers ',
      deliveryStatus: ' Canceled',
    },
    {
      id: 'B263D9AF-C610-E435-A15D-314BD6278CE0',
      productName: ' Washing Machine ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '7C062CA9-46D9-9EC3-B3F5-7E8CDA0A2724',
      productName: 'Dishwashers ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '0DB9E71A-41C7-B5AC-4716-D5B11DED85F3',
      productName: ' Television ',
      deliveryStatus: 'Completed ',
    },
    {
      id: '172A1822-7869-F2B3-48EA-359B4232D026',
      productName: ' Refrigerator',
      deliveryStatus: ' In progress ',
    },
    {
      id: '69CDF1F6-A4F6-8274-3E23-6E9DB23414BE',
      productName: ' Refrigerator',
      deliveryStatus: ' Canceled',
    },
    {
      id: '694210EB-5A2D-669A-EAE4-B4C565C7A0C8',
      productName: 'Dishwashers ',
      deliveryStatus: ' Canceled',
    },
    {
      id: 'D7A1FF21-996A-51ED-AEAA-6801035EBEB9',
      productName: ' Refrigerator',
      deliveryStatus: ' In progress ',
    },
    {
      id: '49F0808E-1184-09E1-9B12-FCFC04C90B4D',
      productName: ' Television ',
      deliveryStatus: ' In progress ',
    },
    {
      id: 'E9174C49-9429-32FA-84F9-92B6961A8271',
      productName: ' Washing Machine ',
      deliveryStatus: 'Completed ',
    },
    {
      id: '51637640-EB65-D383-854C-3798CF3E36C2',
      productName: 'Dishwashers ',
      deliveryStatus: ' In progress ',
    },
    {
      id: 'A0305DC3-1057-1DC8-0541-48B60E6F82E0',
      productName: ' Refrigerator',
      deliveryStatus: ' Canceled',
    },
    {
      id: '33A4FCFB-361E-54C5-4B4C-E77DFC01D1F2',
      productName: ' Television ',
      deliveryStatus: ' Canceled',
    },
    {
      id: 'BAE2F36C-CB1C-2476-DDEE-9C545C994800',
      productName: ' Washing Machine ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '434029AB-9EF1-17F2-EC64-9516EB5F1A62',
      productName: 'Dishwashers ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '24E33ABF-3662-461B-B51A-61CC8AB8FB4A',
      productName: ' Television ',
      deliveryStatus: ' In progress ',
    },
    {
      id: 'B3017457-1EC8-5464-0739-A4AD7852247B',
      productName: ' Refrigerator',
      deliveryStatus: ' Canceled',
    },
    {
      id: '602DC255-F5A7-4E0C-76EF-CDF8EEF02734',
      productName: ' Refrigerator',
      deliveryStatus: ' Canceled',
    },
    {
      id: '4E12E225-3D7E-DCE1-B6C7-7329A507C43B',
      productName: ' Washing Machine ',
      deliveryStatus: ' Canceled',
    },
    {
      id: 'C9715464-D5CF-F1F2-8BED-AD354B91F7D8',
      productName: ' Washing Machine ',
      deliveryStatus: ' In progress ',
    },
    {
      id: 'A83229D5-7CA0-5404-18D1-81A420C312C8',
      productName: ' Refrigerator',
      deliveryStatus: 'Completed ',
    },
    {
      id: 'BC1BD4FF-1495-C218-22A1-2D1C31F8F81C',
      productName: 'Dishwashers ',
      deliveryStatus: ' Canceled',
    },
    {
      id: '2F8A936A-9A17-78DB-CB7C-AF60CB0D2F84',
      productName: ' Refrigerator',
      deliveryStatus: ' Canceled',
    },
    {
      id: '98F3AFE4-3368-643C-9826-84034A66AF21',
      productName: ' Washing Machine ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '165485A9-044A-574B-B576-5A433F8F288A',
      productName: ' Television ',
      deliveryStatus: 'Completed ',
    },
    {
      id: 'B6F61240-A5E8-6B8A-7B73-621CFF023BAA',
      productName: ' Washing Machine ',
      deliveryStatus: ' Canceled',
    },
    {
      id: '460885E3-F278-BCB7-31C5-839D78DC50A0',
      productName: ' Washing Machine ',
      deliveryStatus: 'Completed ',
    },
    {
      id: '844338E3-D58E-E9B9-803C-82CB476E9D79',
      productName: ' Television ',
      deliveryStatus: 'Completed ',
    },
    {
      id: '26052D6D-0892-67F5-658E-6993B5FE4CBC',
      productName: ' Washing Machine ',
      deliveryStatus: ' Canceled',
    },
    {
      id: '713E67E0-8866-F856-1211-6070900FAF66',
      productName: ' Washing Machine ',
      deliveryStatus: ' Canceled',
    },
    {
      id: 'CC60D003-96AC-9075-6EB0-4FF6946ABA4F',
      productName: ' Washing Machine ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '2A1F1CAA-C7FB-E5DF-746D-21F1F1A63F92',
      productName: ' Washing Machine ',
      deliveryStatus: ' Canceled',
    },
    {
      id: '9CF16CD8-EBF6-09FC-1D1E-4A5C2D546646',
      productName: ' Washing Machine ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '623C5F55-3002-D349-AAD7-6D27E5966718',
      productName: 'Dishwashers ',
      deliveryStatus: ' In progress ',
    },
    {
      id: 'BCF39D9D-F49B-D1ED-3840-EC403330A890',
      productName: ' Television ',
      deliveryStatus: ' In progress ',
    },
    {
      id: 'F70D1C11-07E6-45E4-353B-CD91B7805E23',
      productName: ' Refrigerator',
      deliveryStatus: ' In progress ',
    },
    {
      id: 'C5C9D304-E9F0-F1F5-C0BD-10F999C49459',
      productName: ' Television ',
      deliveryStatus: ' In progress ',
    },
    {
      id: '0400E2CE-628D-2C4B-5D80-90CC7BDEF138',
      productName: ' Refrigerator',
      deliveryStatus: 'Completed ',
    },
    {
      id: '3E2DDF08-E3E7-5A3F-61E7-E3D50F44CEFE',
      productName: 'Dishwashers ',
      deliveryStatus: ' Canceled',
    },
    {
      id: 'ED5414E3-306A-E38E-5AE0-BD49B8B8E46F',
      productName: ' Refrigerator',
      deliveryStatus: ' In progress ',
    },
    {
      id: 'F80362A8-8BAB-F2C4-47D5-1115ACAA8D6C',
      productName: ' Refrigerator',
      deliveryStatus: 'Completed ',
    },
    {
      id: '531F038D-6AC4-2D9F-C086-986F3797159A',
      productName: ' Washing Machine ',
      deliveryStatus: ' Canceled',
    },
  ];
  stockReport = [
    {
      id: 'DD6E5B16-2399-0477-CB54-38FF826D841C',
      productName: 'Air conditioner',
      stockStaus: 'Out of stock',
    },
    {
      id: 'EC95ED89-20A0-FADE-7523-DEC6F09E9030',
      productName: 'Refrigerator',
      stockStaus: 'Out of stock',
    },
    {
      id: '5E4A81F5-D271-A7B4-9D56-7901B356E22D',
      productName: 'Washing Machine',
      stockStaus: 'In stock',
    },
    {
      id: '11B79156-1B5C-CAF6-D8B1-D3142EE7C41A',
      productName: 'Refrigerator',
      stockStaus: 'In stock',
    },
    {
      id: '4149D338-0892-0CD6-5A58-E1F67DE35108',
      productName: 'Air conditioner',
      stockStaus: 'In stock',
    },
    {
      id: '6DB6EFB8-41F7-4E2E-9A8C-CEB9BCAE1552',
      productName: 'Washing Machine',
      stockStaus: 'In stock',
    },
    {
      id: 'E0C54D2E-2B95-98F2-67F2-CAC0ABF770C3',
      productName: 'Television',
      stockStaus: 'In stock',
    },
    {
      id: '497D5F57-6A39-5A26-B671-339D7FAD2F16',
      productName: 'Sofa',
      stockStaus: 'Out of stock',
    },
    {
      id: '0DF1D2A9-0B17-B50B-8589-6A3FDA7BC9C9',
      productName: 'Dishwashers',
      stockStaus: 'Out of stock',
    },
    {
      id: '578A1885-778E-F0CD-2217-6962947F6DF5',
      productName: 'Air conditioner',
      stockStaus: 'Out of stock',
    },
    {
      id: '38F046C6-732E-DA04-A570-6BF2FD3BAD7D',
      productName: 'Bed',
      stockStaus: 'In stock',
    },
    {
      id: '21B120FA-13B9-750F-0365-9E42EBF36099',
      productName: 'Refrigerator',
      stockStaus: 'In stock',
    },
    {
      id: 'BE662D88-4418-2847-EE0F-E354F946B686',
      productName: 'Bed',
      stockStaus: 'In stock',
    },
    {
      id: '624D0A7E-DD55-C0A1-96E9-B0F60D091CF8',
      productName: 'Bed',
      stockStaus: 'In stock',
    },
    {
      id: 'E1BB44B7-A842-660E-F473-5E9700017C48',
      productName: 'Refrigerator',
      stockStaus: 'Out of stock',
    },
    {
      id: 'B5BF9DE3-3540-A17D-FD10-460B62AF2A73',
      productName: 'Air conditioner',
      stockStaus: 'Out of stock',
    },
    {
      id: '0CA6FBE2-BCBB-F314-B5E5-CC09B66CB5D0',
      productName: 'Television',
      stockStaus: 'In stock',
    },
    {
      id: 'C567155C-1302-4F4B-71B2-07A60386079A',
      productName: 'Air conditioner',
      stockStaus: 'In stock',
    },
    {
      id: 'F8E616D6-414A-F973-9AEF-3990F6D30421',
      productName: 'Washing Machine',
      stockStaus: 'In stock',
    },
    {
      id: '0FD33C0B-D8D3-AA2E-A497-FD5BF3BB504F',
      productName: 'Bed',
      stockStaus: 'Out of stock',
    },
    {
      id: 'C842F2CE-6AF0-F10B-396F-D05D3A99AF59',
      productName: 'Refrigerator',
      stockStaus: 'In stock',
    },
    {
      id: 'CBE1B836-25FD-287E-262C-24157BE09204',
      productName: 'Washing Machine',
      stockStaus: 'In stock',
    },
    {
      id: '6B850107-B799-6724-A837-3AADC8A98830',
      productName: 'Television',
      stockStaus: 'In stock',
    },
    {
      id: '190887D3-12AE-3FE2-8386-60D1BC055B1B',
      productName: 'Refrigerator',
      stockStaus: 'In stock',
    },
    {
      id: 'C8EADC7A-24BF-9C63-C66C-29C2261E8391',
      productName: 'Sofa',
      stockStaus: 'In stock',
    },
    {
      id: '86944B3F-28F4-1ECB-45C9-31DD3D47BFE7',
      productName: 'Dishwashers',
      stockStaus: 'Out of stock',
    },
    {
      id: '358FCAE0-19DB-0383-1934-36C0E1DAE80A',
      productName: 'Air conditioner',
      stockStaus: 'In stock',
    },
    {
      id: '86083524-DE7E-F8B5-380D-8C85B0474AB0',
      productName: 'Sofa',
      stockStaus: 'In stock',
    },
    {
      id: '5126B0F5-A47E-1981-0929-F672FBBE2E60',
      productName: 'Refrigerator',
      stockStaus: 'Out of stock',
    },
    {
      id: '8738C492-5C24-ED14-E71A-138CEFDF77CA',
      productName: 'Sofa',
      stockStaus: 'Out of stock',
    },
    {
      id: 'BA6ACE13-1B24-EC26-B095-840E0D4C89A7',
      productName: 'Television',
      stockStaus: 'In stock',
    },
    {
      id: '49EC47B4-BF75-AF18-FBB7-B031B007E437',
      productName: 'Sofa',
      stockStaus: 'In stock',
    },
    {
      id: '98D29C3A-EEC3-919E-2D99-DE4CD7D4D63B',
      productName: 'Dishwashers',
      stockStaus: 'Out of stock',
    },
    {
      id: '96EB0A51-F739-79BD-FF14-3EE5D5FA71E2',
      productName: 'Washing Machine',
      stockStaus: 'Out of stock',
    },
    {
      id: 'B48FBC42-77D2-2EB1-293A-965FAF409FFD',
      productName: 'Television',
      stockStaus: 'Out of stock',
    },
    {
      id: '2C5D7BE7-ACF5-1A32-4701-95E2BDE607F0',
      productName: 'Air conditioner',
      stockStaus: 'In stock',
    },
    {
      id: 'D231D382-95BE-BA38-4C2D-22A9E82DB497',
      productName: 'Refrigerator',
      stockStaus: 'Out of stock',
    },
    {
      id: '532DF610-DA21-CC93-664D-7490DF736A5B',
      productName: 'Sofa',
      stockStaus: 'Out of stock',
    },
    {
      id: 'ED77F497-E9D2-65AB-0683-01D822598B5F',
      productName: 'Refrigerator',
      stockStaus: 'Out of stock',
    },
    {
      id: '9CEC93E2-4AFB-D677-8C3D-5E79647A3744',
      productName: 'Dishwashers',
      stockStaus: 'In stock',
    },
    {
      id: 'AF9349BD-290F-4940-8BFB-575EE3ABAE4F',
      productName: 'Television',
      stockStaus: 'In stock',
    },
    {
      id: '1CD0BC08-8C65-97EC-C6FC-D268D8AC2676',
      productName: 'Dishwashers',
      stockStaus: 'In stock',
    },
    {
      id: '1CE66922-CFBC-9CFB-3764-156260A23622',
      productName: 'Television',
      stockStaus: 'In stock',
    },
    {
      id: '473AB931-9826-AD6F-8A89-1B6455BC81B5',
      productName: 'Sofa',
      stockStaus: 'In stock',
    },
    {
      id: 'EAB72CB3-3FC8-E219-0336-CB76BBE88872',
      productName: 'Dishwashers',
      stockStaus: 'In stock',
    },
    {
      id: 'B370FD60-5E36-2180-D732-7A75341A3322',
      productName: 'Washing Machine',
      stockStaus: 'In stock',
    },
    {
      id: '62DEF35F-E512-DC2D-DD55-C16C3FC123E4',
      productName: 'Sofa',
      stockStaus: 'Out of stock',
    },
    {
      id: '66392FE4-CAF6-99E0-A35A-CD04FA580BEB',
      productName: 'Air conditioner',
      stockStaus: 'Out of stock',
    },
    {
      id: 'BDCFA0F3-BED1-ACCC-C358-61BFC34369EC',
      productName: 'Air conditioner',
      stockStaus: 'In stock',
    },
    {
      id: '786E7AF5-08AA-A681-6904-8547CB6CA3A5',
      productName: 'Dishwashers',
      stockStaus: 'In stock',
    },
    {
      id: '5ADBAB8F-BC8B-D398-DAF3-E7240D5B4A6D',
      productName: 'Refrigerator',
      stockStaus: 'In stock',
    },
    {
      id: '245561DB-A0A9-4E4B-11B8-47DD4F3CF37A',
      productName: 'Sofa',
      stockStaus: 'Out of stock',
    },
    {
      id: 'CE128E1F-9966-E56D-B94E-B1E3364F2C0E',
      productName: 'Washing Machine',
      stockStaus: 'In stock',
    },
    {
      id: 'C6A7BD5E-37AD-29F5-B439-1C0CB7701BE3',
      productName: 'Dishwashers',
      stockStaus: 'Out of stock',
    },
    {
      id: '020A7AD9-8C57-4B78-4AEF-AF9554635656',
      productName: 'Sofa',
      stockStaus: 'In stock',
    },
    {
      id: '7DFC7118-66D6-2319-8FDB-904CAF60A93A',
      productName: 'Sofa',
      stockStaus: 'In stock',
    },
    {
      id: '823266E9-C88C-C5C6-6D54-A23D5A0BDA23',
      productName: 'Dishwashers',
      stockStaus: 'Out of stock',
    },
    {
      id: '0AF6A5B0-A6F1-156E-B963-2C0DAD304A81',
      productName: 'Bed',
      stockStaus: 'Out of stock',
    },
    {
      id: '3B97E066-2965-9242-49C0-CF9D7B38C0CE',
      productName: 'Television',
      stockStaus: 'In stock',
    },
    {
      id: '77E7CF48-51CF-E66B-0868-D85D6F15785A',
      productName: 'Dishwashers',
      stockStaus: 'In stock',
    },
    {
      id: '335F5348-B917-8A9A-9E76-40322840FB82',
      productName: 'Washing Machine',
      stockStaus: 'Out of stock',
    },
    {
      id: '60964409-A914-2FA0-F4D0-6DD375C5FA37',
      productName: 'Washing Machine',
      stockStaus: 'Out of stock',
    },
    {
      id: 'EB85C7B5-3292-FA00-4487-B3FE5162467D',
      productName: 'Air conditioner',
      stockStaus: 'In stock',
    },
    {
      id: '55BAF3C0-A4F2-B5F3-C8FC-BDC597CF4148',
      productName: 'Dishwashers',
      stockStaus: 'Out of stock',
    },
    {
      id: 'B130C974-F97D-E5DD-6164-45FA52599A81',
      productName: 'Dishwashers',
      stockStaus: 'Out of stock',
    },
    {
      id: '3EB42836-55BB-08A4-D742-7CC0F85D35A3',
      productName: 'Refrigerator',
      stockStaus: 'In stock',
    },
    {
      id: '79FFBD1C-BC3F-746E-0C96-9DE052E5C490',
      productName: 'Sofa',
      stockStaus: 'Out of stock',
    },
    {
      id: 'B0B695E3-180F-1259-19FF-9758B7F53F5B',
      productName: 'Washing Machine',
      stockStaus: 'In stock',
    },
    {
      id: '84C052F3-A801-53B7-0340-811C57A331B4',
      productName: 'Refrigerator',
      stockStaus: 'In stock',
    },
    {
      id: 'B2BB6E8A-30C6-F0A3-D6CD-82D39C75E531',
      productName: 'Washing Machine',
      stockStaus: 'Out of stock',
    },
    {
      id: '1114D744-B0C3-1E5F-2D7B-E0D41B17812E',
      productName: 'Sofa',
      stockStaus: 'Out of stock',
    },
    {
      id: 'EAB6D774-5BBE-9F1F-0BF7-31ACD5EEB2CE',
      productName: 'Sofa',
      stockStaus: 'In stock',
    },
    {
      id: '9A386806-D278-C167-374A-FED72FABD1D7',
      productName: 'Refrigerator',
      stockStaus: 'In stock',
    },
    {
      id: '7FBCD87A-FE46-07C2-0D9D-6BA73DBA1D4E',
      productName: 'Television',
      stockStaus: 'Out of stock',
    },
    {
      id: 'F275FC2D-4AA4-4661-0C9C-CFAE2FCA952B',
      productName: 'Television',
      stockStaus: 'Out of stock',
    },
    {
      id: '8D2696AA-206E-16BA-8178-71A477993323',
      productName: 'Bed',
      stockStaus: 'Out of stock',
    },
    {
      id: '4E3F2428-5EE8-1308-6788-D7B7B3A6DB25',
      productName: 'Air conditioner',
      stockStaus: 'In stock',
    },
    {
      id: 'E2DFF9F2-EAF2-5D7C-08D4-AA24E26CE6F5',
      productName: 'Refrigerator',
      stockStaus: 'In stock',
    },
    {
      id: 'F84A8F3A-7D8E-8649-B39C-3166D81AA4EC',
      productName: 'Air conditioner',
      stockStaus: 'Out of stock',
    },
    {
      id: '903BD69D-5DE9-DCF9-2F67-62955D5C157E',
      productName: 'Television',
      stockStaus: 'In stock',
    },
    {
      id: '77BE0052-CDEB-1BAC-1F6F-6F11D99861CA',
      productName: 'Bed',
      stockStaus: 'In stock',
    },
    {
      id: '444548F5-817A-7EA2-F954-DF327B80B04F',
      productName: 'Bed',
      stockStaus: 'In stock',
    },
    {
      id: 'E1404941-6BF9-D78D-3BB6-D6239BB112BD',
      productName: 'Dishwashers',
      stockStaus: 'Out of stock',
    },
    {
      id: 'AA862E64-E7AA-5C3A-28F6-C6B77386DDB6',
      productName: 'Refrigerator',
      stockStaus: 'In stock',
    },
    {
      id: '27014AD9-4CD4-4921-36C3-1ACEF0C84B24',
      productName: 'Bed',
      stockStaus: 'In stock',
    },
    {
      id: 'B5B7876B-A205-92E4-B643-9B48CD3C72B9',
      productName: 'Air conditioner',
      stockStaus: 'In stock',
    },
    {
      id: '65C89B3A-9D01-B038-E18C-11F10F4CC160',
      productName: 'Sofa',
      stockStaus: 'In stock',
    },
    {
      id: '1D95E6B8-6345-0750-D851-D6F8B85EE15A',
      productName: 'Bed',
      stockStaus: 'Out of stock',
    },
    {
      id: 'C3DA589A-DB1C-11B9-8357-66C976C84179',
      productName: 'Television',
      stockStaus: 'Out of stock',
    },
    {
      id: '817A616A-EB73-16CA-1C40-1617ADA800BF',
      productName: 'Refrigerator',
      stockStaus: 'Out of stock',
    },
    {
      id: 'F15696A9-174E-7A0A-9D16-5CD301B1B234',
      productName: 'Air conditioner',
      stockStaus: 'In stock',
    },
    {
      id: '638A98BA-286B-0007-7FDE-94D39409D53C',
      productName: 'Dishwashers',
      stockStaus: 'In stock',
    },
    {
      id: '2796381C-C898-6006-D770-D947795E2404',
      productName: 'Air conditioner',
      stockStaus: 'Out of stock',
    },
    {
      id: '798DD4F9-3F81-75B3-C0BC-6CD6AEF4EB43',
      productName: 'Dishwashers',
      stockStaus: 'In stock',
    },
    {
      id: '4C86AB76-8D02-4CBF-2B74-ABE5CABFC654',
      productName: 'Bed',
      stockStaus: 'In stock',
    },
    {
      id: '0581AE9D-1E33-8182-0AC9-98A72784E466',
      productName: 'Bed',
      stockStaus: 'Out of stock',
    },
    {
      id: 'C0BC128D-0396-6ACC-B299-C778930B452C',
      productName: 'Television',
      stockStaus: 'Out of stock',
    },
    {
      id: '0EC96578-E4F7-14CE-047B-B02A320BF4E5',
      productName: 'Air conditioner',
      stockStaus: 'In stock',
    },
    {
      id: 'FA87DDC1-FA29-2518-F336-F157D5141CFC',
      productName: 'Washing Machine',
      stockStaus: 'Out of stock',
    },
    {
      id: '48FD0970-6DA1-6DC7-87DF-3177A1EFDEDF',
      productName: 'Television',
      stockStaus: 'Out of stock',
    },
  ];

  constructor(private http: HttpClient) {}

  // storeData() {
  // this.http
  //   .put(
  //     'https://ng-cyble-assignment.firebaseio.com/stock.json',
  //     this.stockReport
  //   )
  //   .subscribe((response) => {
  //     console.log(response);
  //   });
  // }

  getData(url) {
    return this.http.get(url);
  }
}
