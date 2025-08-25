const countries = [
	{
		name: 'Afghanistan',
		alpha2: 'AF',
		alpha3: 'AFG',
		numericCode: '004',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Southern Asia',
				code: '034'
			}
		},
		currency: 'AFN',
		dialCode: '+93'
	},
	{
		name: 'Åland Islands',
		alpha2: 'AX',
		alpha3: 'ALA',
		numericCode: '248',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Northern Europe',
				code: '154'
			}
		},
		currency: 'EUR',
		dialCode: '+358'
	},
	{
		name: 'Albania',
		alpha2: 'AL',
		alpha3: 'ALB',
		numericCode: '008',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Southern Europe',
				code: '039'
			}
		},
		currency: 'ALL',
		dialCode: '+355'
	},
	{
		name: 'Algeria',
		alpha2: 'DZ',
		alpha3: 'DZA',
		numericCode: '012',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Northern Africa',
				code: '015'
			}
		},
		currency: 'DZD',
		dialCode: '+213'
	},
	{
		name: 'American Samoa',
		alpha2: 'AS',
		alpha3: 'ASM',
		numericCode: '016',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Polynesia',
				code: '061'
			}
		},
		currency: 'USD',
		dialCode: '+1684'
	},
	{
		name: 'Andorra',
		alpha2: 'AD',
		alpha3: 'AND',
		numericCode: '020',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Southern Europe',
				code: '039'
			}
		},
		currency: 'EUR',
		dialCode: '+376'
	},
	{
		name: 'Angola',
		alpha2: 'AO',
		alpha3: 'AGO',
		numericCode: '024',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Middle Africa',
				code: '017'
			}
		},
		currency: 'AOA',
		dialCode: '+244'
	},
	{
		name: 'Anguilla',
		alpha2: 'AI',
		alpha3: 'AIA',
		numericCode: '660',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'XCD',
		dialCode: '+1264'
	},
	{
		name: 'Antarctica',
		alpha2: 'AQ',
		alpha3: 'ATA',
		numericCode: '010',
		currency: 'XCD',
		dialCode: '+672',
		region: undefined
	},
	{
		name: 'Antigua and Barbuda',
		alpha2: 'AG',
		alpha3: 'ATG',
		numericCode: '028',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'XCD',
		dialCode: '+1268'
	},
	{
		name: 'Argentina',
		alpha2: 'AR',
		alpha3: 'ARG',
		numericCode: '032',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'South America',
				code: '005'
			}
		},
		currency: 'ARS',
		dialCode: '+54'
	},
	{
		name: 'Armenia',
		alpha2: 'AM',
		alpha3: 'ARM',
		numericCode: '051',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Western Asia',
				code: '145'
			}
		},
		currency: 'AMD',
		dialCode: '+374'
	},
	{
		name: 'Aruba',
		alpha2: 'AW',
		alpha3: 'ABW',
		numericCode: '533',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'AWG',
		dialCode: '+297'
	},
	{
		name: 'Australia',
		alpha2: 'AU',
		alpha3: 'AUS',
		numericCode: '036',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Australia and New Zealand',
				code: '053'
			}
		},
		currency: 'AUD',
		dialCode: '+61'
	},
	{
		name: 'Austria',
		alpha2: 'AT',
		alpha3: 'AUT',
		numericCode: '040',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Western Europe',
				code: '155'
			}
		},
		currency: 'EUR',
		dialCode: '+43'
	},
	{
		name: 'Azerbaijan',
		alpha2: 'AZ',
		alpha3: 'AZE',
		numericCode: '031',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Western Asia',
				code: '145'
			}
		},
		currency: 'AZN',
		dialCode: '+994'
	},
	{
		name: 'Bahamas',
		alpha2: 'BS',
		alpha3: 'BHS',
		numericCode: '044',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'BSD',
		dialCode: '+1242'
	},
	{
		name: 'Bahrain',
		alpha2: 'BH',
		alpha3: 'BHR',
		numericCode: '048',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Western Asia',
				code: '145'
			}
		},
		currency: 'BHD',
		dialCode: '+973'
	},
	{
		name: 'Bangladesh',
		alpha2: 'BD',
		alpha3: 'BGD',
		numericCode: '050',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Southern Asia',
				code: '034'
			}
		},
		currency: 'BDT',
		dialCode: '+880'
	},
	{
		name: 'Barbados',
		alpha2: 'BB',
		alpha3: 'BRB',
		numericCode: '052',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'BBD',
		dialCode: '+1246'
	},
	{
		name: 'Belarus',
		alpha2: 'BY',
		alpha3: 'BLR',
		numericCode: '112',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Eastern Europe',
				code: '151'
			}
		},
		currency: 'BYN',
		dialCode: '+375'
	},
	{
		name: 'Belgium',
		alpha2: 'BE',
		alpha3: 'BEL',
		numericCode: '056',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Western Europe',
				code: '155'
			}
		},
		currency: 'EUR',
		dialCode: '+32'
	},
	{
		name: 'Belize',
		alpha2: 'BZ',
		alpha3: 'BLZ',
		numericCode: '084',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Central America',
				code: '013'
			}
		},
		currency: 'BZD',
		dialCode: '+501'
	},
	{
		name: 'Benin',
		alpha2: 'BJ',
		alpha3: 'BEN',
		numericCode: '204',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Western Africa',
				code: '011'
			}
		},
		currency: 'XOF',
		dialCode: '+229'
	},
	{
		name: 'Bermuda',
		alpha2: 'BM',
		alpha3: 'BMU',
		numericCode: '060',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Northern America',
				code: '021'
			}
		},
		currency: 'BMD',
		dialCode: '+1441'
	},
	{
		name: 'Bhutan',
		alpha2: 'BT',
		alpha3: 'BTN',
		numericCode: '064',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Southern Asia',
				code: '034'
			}
		},
		currency: 'BTN',
		dialCode: '+975'
	},
	{
		name: 'Bolivia',
		alpha2: 'BO',
		alpha3: 'BOL',
		numericCode: '068',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'South America',
				code: '005'
			}
		},
		currency: 'BOB',
		dialCode: '+591'
	},
	{
		name: 'Bonaire',
		alpha2: 'BQ',
		alpha3: 'BES',
		numericCode: '535',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'USD',
		dialCode: '+599'
	},
	{
		name: 'Bosnia and Herzegovina',
		alpha2: 'BA',
		alpha3: 'BIH',
		numericCode: '070',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Southern Europe',
				code: '039'
			}
		},
		currency: 'BAM',
		dialCode: '+387'
	},
	{
		name: 'Botswana',
		alpha2: 'BW',
		alpha3: 'BWA',
		numericCode: '072',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Southern Africa',
				code: '018'
			}
		},
		currency: 'BWP',
		dialCode: '+267'
	},
	{
		name: 'Bouvet Island',
		alpha2: 'BV',
		alpha3: 'BVT',
		numericCode: '074',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'South America',
				code: '005'
			}
		},
		currency: 'NOK',
		dialCode: '+47'
	},
	{
		name: 'Brazil',
		alpha2: 'BR',
		alpha3: 'BRA',
		numericCode: '076',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'South America',
				code: '005'
			}
		},
		currency: 'BRL',
		dialCode: '+55'
	},
	{
		name: 'British Indian Ocean Territory',
		alpha2: 'IO',
		alpha3: 'IOT',
		numericCode: '086',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'USD',
		dialCode: '+246'
	},
	{
		name: 'Brunei',
		alpha2: 'BN',
		alpha3: 'BRN',
		numericCode: '096',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'South-eastern Asia',
				code: '035'
			}
		},
		currency: 'BND',
		dialCode: '+673'
	},
	{
		name: 'Bulgaria',
		alpha2: 'BG',
		alpha3: 'BGR',
		numericCode: '100',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Eastern Europe',
				code: '151'
			}
		},
		currency: 'BGN',
		dialCode: '+359'
	},
	{
		name: 'Burkina Faso',
		alpha2: 'BF',
		alpha3: 'BFA',
		numericCode: '854',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Western Africa',
				code: '011'
			}
		},
		currency: 'XOF',
		dialCode: '+226'
	},
	{
		name: 'Burundi',
		alpha2: 'BI',
		alpha3: 'BDI',
		numericCode: '108',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'BIF',
		dialCode: '+257'
	},
	{
		name: 'Cabo Verde',
		alpha2: 'CV',
		alpha3: 'CPV',
		numericCode: '132',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Western Africa',
				code: '011'
			}
		},
		currency: 'CVE',
		dialCode: '+238'
	},
	{
		name: 'Cambodia',
		alpha2: 'KH',
		alpha3: 'KHM',
		numericCode: '116',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'South-eastern Asia',
				code: '035'
			}
		},
		currency: 'KHR',
		dialCode: '+855'
	},
	{
		name: 'Cameroon',
		alpha2: 'CM',
		alpha3: 'CMR',
		numericCode: '120',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Middle Africa',
				code: '017'
			}
		},
		currency: 'XAF',
		dialCode: '+237'
	},
	{
		name: 'Canada',
		alpha2: 'CA',
		alpha3: 'CAN',
		numericCode: '124',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Northern America',
				code: '021'
			}
		},
		currency: 'CAD',
		dialCode: '+1'
	},
	{
		name: 'Cayman Islands',
		alpha2: 'KY',
		alpha3: 'CYM',
		numericCode: '136',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'KYD',
		dialCode: '+ 345'
	},
	{
		name: 'Central African Republic',
		alpha2: 'CF',
		alpha3: 'CAF',
		numericCode: '140',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Middle Africa',
				code: '017'
			}
		},
		currency: 'XAF',
		dialCode: '+236'
	},
	{
		name: 'Chad',
		alpha2: 'TD',
		alpha3: 'TCD',
		numericCode: '148',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Middle Africa',
				code: '017'
			}
		},
		currency: 'XAF',
		dialCode: '+235'
	},
	{
		name: 'Chile',
		alpha2: 'CL',
		alpha3: 'CHL',
		numericCode: '152',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'South America',
				code: '005'
			}
		},
		currency: 'CLP',
		dialCode: '+56'
	},
	{
		name: 'China',
		alpha2: 'CN',
		alpha3: 'CHN',
		numericCode: '156',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Eastern Asia',
				code: '030'
			}
		},
		currency: 'CNY',
		dialCode: '+86'
	},
	{
		name: 'Christmas Island',
		alpha2: 'CX',
		alpha3: 'CXR',
		numericCode: '162',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Australia and New Zealand',
				code: '053'
			}
		},
		currency: 'AUD',
		dialCode: '+61'
	},
	{
		name: 'Cocos (Keeling) Islands',
		alpha2: 'CC',
		alpha3: 'CCK',
		numericCode: '166',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Australia and New Zealand',
				code: '053'
			}
		},
		currency: 'AUD',
		dialCode: '+61'
	},
	{
		name: 'Colombia',
		alpha2: 'CO',
		alpha3: 'COL',
		numericCode: '170',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'South America',
				code: '005'
			}
		},
		currency: 'COP',
		dialCode: '+57'
	},
	{
		name: 'Comoros',
		alpha2: 'KM',
		alpha3: 'COM',
		numericCode: '174',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'KMF',
		dialCode: '+269'
	},
	{
		name: 'Congo',
		alpha2: 'CG',
		alpha3: 'COG',
		numericCode: '178',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Middle Africa',
				code: '017'
			}
		},
		currency: 'XAF',
		dialCode: '+242'
	},
	{
		name: 'Democratic Republic of Congo',
		alpha2: 'CD',
		alpha3: 'COD',
		numericCode: '180',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Middle Africa',
				code: '017'
			}
		},
		currency: 'CDF',
		dialCode: '+243'
	},
	{
		name: 'Cook Islands',
		alpha2: 'CK',
		alpha3: 'COK',
		numericCode: '184',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Polynesia',
				code: '061'
			}
		},
		currency: 'NZD',
		dialCode: '+682'
	},
	{
		name: 'Costa Rica',
		alpha2: 'CR',
		alpha3: 'CRI',
		numericCode: '188',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Central America',
				code: '013'
			}
		},
		currency: 'CRC',
		dialCode: '+506'
	},
	{
		name: 'Côte d\'Ivoire',
		alpha2: 'CI',
		alpha3: 'CIV',
		numericCode: '384',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Western Africa',
				code: '011'
			}
		},
		currency: 'XOF',
		dialCode: '+225'
	},
	{
		name: 'Croatia',
		alpha2: 'HR',
		alpha3: 'HRV',
		numericCode: '191',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Southern Europe',
				code: '039'
			}
		},
		currency: 'EUR',
		dialCode: '+385'
	},
	{
		name: 'Cuba',
		alpha2: 'CU',
		alpha3: 'CUB',
		numericCode: '192',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'CUP',
		dialCode: '+53'
	},
	{
		name: 'Curaçao',
		alpha2: 'CW',
		alpha3: 'CUW',
		numericCode: '531',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'ANG',
		dialCode: '+599'
	},
	{
		name: 'Cyprus',
		alpha2: 'CY',
		alpha3: 'CYP',
		numericCode: '196',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Western Asia',
				code: '145'
			}
		},
		currency: 'EUR',
		dialCode: '+357'
	},
	{
		name: 'Czech Republic',
		alpha2: 'CZ',
		alpha3: 'CZE',
		numericCode: '203',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Eastern Europe',
				code: '151'
			}
		},
		currency: 'CZK',
		dialCode: '+420'
	},
	{
		name: 'Denmark',
		alpha2: 'DK',
		alpha3: 'DNK',
		numericCode: '208',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Northern Europe',
				code: '154'
			}
		},
		currency: 'DKK',
		dialCode: '+45'
	},
	{
		name: 'Djibouti',
		alpha2: 'DJ',
		alpha3: 'DJI',
		numericCode: '262',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'DJF',
		dialCode: '+253'
	},
	{
		name: 'Dominica',
		alpha2: 'DM',
		alpha3: 'DMA',
		numericCode: '212',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'XCD',
		dialCode: '+1767'
	},
	{
		name: 'Dominican Republic',
		alpha2: 'DO',
		alpha3: 'DOM',
		numericCode: '214',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'DOP',
		dialCode: '+1849'
	},
	{
		name: 'Ecuador',
		alpha2: 'EC',
		alpha3: 'ECU',
		numericCode: '218',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'South America',
				code: '005'
			}
		},
		currency: 'USD',
		dialCode: '+593'
	},
	{
		name: 'Egypt',
		alpha2: 'EG',
		alpha3: 'EGY',
		numericCode: '818',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Northern Africa',
				code: '015'
			}
		},
		currency: 'EGP',
		dialCode: '+20'
	},
	{
		name: 'El Salvador',
		alpha2: 'SV',
		alpha3: 'SLV',
		numericCode: '222',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Central America',
				code: '013'
			}
		},
		currency: 'SVC',
		dialCode: '+503'
	},
	{
		name: 'Equatorial Guinea',
		alpha2: 'GQ',
		alpha3: 'GNQ',
		numericCode: '226',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Middle Africa',
				code: '017'
			}
		},
		currency: 'XAF',
		dialCode: '+240'
	},
	{
		name: 'Eritrea',
		alpha2: 'ER',
		alpha3: 'ERI',
		numericCode: '232',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'ERN',
		dialCode: '+291'
	},
	{
		name: 'Estonia',
		alpha2: 'EE',
		alpha3: 'EST',
		numericCode: '233',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Northern Europe',
				code: '154'
			}
		},
		currency: 'EUR',
		dialCode: '+372'
	},
	{
		name: 'Eswatini',
		alpha2: 'SZ',
		alpha3: 'SWZ',
		numericCode: '748',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Southern Africa',
				code: '018'
			}
		},
		currency: 'SZL',
		dialCode: '+268'
	},
	{
		name: 'Ethiopia',
		alpha2: 'ET',
		alpha3: 'ETH',
		numericCode: '231',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'ETB',
		dialCode: '+251'
	},
	{
		name: 'Falkland Islands',
		alpha2: 'FK',
		alpha3: 'FLK',
		numericCode: '238',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'South America',
				code: '005'
			}
		},
		currency: 'FKP',
		dialCode: '+500'
	},
	{
		name: 'Faroe Islands',
		alpha2: 'FO',
		alpha3: 'FRO',
		numericCode: '234',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Northern Europe',
				code: '154'
			}
		},
		currency: 'DKK',
		dialCode: '+298'
	},
	{
		name: 'Fiji Islands',
		alpha2: 'FJ',
		alpha3: 'FJI',
		numericCode: '242',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Melanesia',
				code: '054'
			}
		},
		currency: 'FJD',
		dialCode: '+679'
	},
	{
		name: 'Finland',
		alpha2: 'FI',
		alpha3: 'FIN',
		numericCode: '246',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Northern Europe',
				code: '154'
			}
		},
		currency: 'EUR',
		dialCode: '+358'
	},
	{
		name: 'France',
		alpha2: 'FR',
		alpha3: 'FRA',
		numericCode: '250',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Western Europe',
				code: '155'
			}
		},
		currency: 'EUR',
		dialCode: '+33'
	},
	{
		name: 'French Guiana',
		alpha2: 'GF',
		alpha3: 'GUF',
		numericCode: '254',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'South America',
				code: '005'
			}
		},
		currency: 'EUR',
		dialCode: '+594'
	},
	{
		name: 'French Polynesia',
		alpha2: 'PF',
		alpha3: 'PYF',
		numericCode: '258',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Polynesia',
				code: '061'
			}
		},
		currency: 'XPF',
		dialCode: '+689'
	},
	{
		name: 'French Southern Territories',
		alpha2: 'TF',
		alpha3: 'ATF',
		numericCode: '260',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'EUR',
		dialCode: '+262'
	},
	{
		name: 'Gabon',
		alpha2: 'GA',
		alpha3: 'GAB',
		numericCode: '266',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Middle Africa',
				code: '017'
			}
		},
		currency: 'XAF',
		dialCode: '+241'
	},
	{
		name: 'Gambia',
		alpha2: 'GM',
		alpha3: 'GMB',
		numericCode: '270',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Western Africa',
				code: '011'
			}
		},
		currency: 'GMD',
		dialCode: '+220'
	},
	{
		name: 'Georgia',
		alpha2: 'GE',
		alpha3: 'GEO',
		numericCode: '268',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Western Asia',
				code: '145'
			}
		},
		currency: 'GEL',
		dialCode: '+995'
	},
	{
		name: 'Germany',
		alpha2: 'DE',
		alpha3: 'DEU',
		numericCode: '276',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Western Europe',
				code: '155'
			}
		},
		currency: 'EUR',
		dialCode: '+49'
	},
	{
		name: 'Ghana',
		alpha2: 'GH',
		alpha3: 'GHA',
		numericCode: '288',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Western Africa',
				code: '011'
			}
		},
		currency: 'GHS',
		dialCode: '+233'
	},
	{
		name: 'Gibraltar',
		alpha2: 'GI',
		alpha3: 'GIB',
		numericCode: '292',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Southern Europe',
				code: '039'
			}
		},
		currency: 'GIP',
		dialCode: '+350'
	},
	{
		name: 'Greece',
		alpha2: 'GR',
		alpha3: 'GRC',
		numericCode: '300',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Southern Europe',
				code: '039'
			}
		},
		currency: 'EUR',
		dialCode: '+30'
	},
	{
		name: 'Greenland',
		alpha2: 'GL',
		alpha3: 'GRL',
		numericCode: '304',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Northern America',
				code: '021'
			}
		},
		currency: 'DKK',
		dialCode: '+299'
	},
	{
		name: 'Grenada',
		alpha2: 'GD',
		alpha3: 'GRD',
		numericCode: '308',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'XCD',
		dialCode: '+1473'
	},
	{
		name: 'Guadeloupe',
		alpha2: 'GP',
		alpha3: 'GLP',
		numericCode: '312',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'EUR',
		dialCode: '+590'
	},
	{
		name: 'Guam',
		alpha2: 'GU',
		alpha3: 'GUM',
		numericCode: '316',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Micronesia',
				code: '057'
			}
		},
		currency: 'USD',
		dialCode: '+1671'
	},
	{
		name: 'Guatemala',
		alpha2: 'GT',
		alpha3: 'GTM',
		numericCode: '320',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Central America',
				code: '013'
			}
		},
		currency: 'GTQ',
		dialCode: '+502'
	},
	{
		name: 'Guernsey',
		alpha2: 'GG',
		alpha3: 'GGY',
		numericCode: '831',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Northern Europe',
				code: '154'
			},
			intermediateRegion: {
				name: 'Channel Islands',
				code: '830'
			}
		},
		currency: 'GBP',
		dialCode: '+44'
	},
	{
		name: 'Guinea',
		alpha2: 'GN',
		alpha3: 'GIN',
		numericCode: '324',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Western Africa',
				code: '011'
			}
		},
		currency: 'GNF',
		dialCode: '+224'
	},
	{
		name: 'Guinea-Bissau',
		alpha2: 'GW',
		alpha3: 'GNB',
		numericCode: '624',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Western Africa',
				code: '011'
			}
		},
		currency: 'XOF',
		dialCode: '+245'
	},
	{
		name: 'Guyana',
		alpha2: 'GY',
		alpha3: 'GUY',
		numericCode: '328',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'South America',
				code: '005'
			}
		},
		currency: 'GYD',
		dialCode: '+595'
	},
	{
		name: 'Haiti',
		alpha2: 'HT',
		alpha3: 'HTI',
		numericCode: '332',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'HTG',
		dialCode: '+509'
	},
	{
		name: 'Heard Island and McDonald Islands',
		alpha2: 'HM',
		alpha3: 'HMD',
		numericCode: '334',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Australia and New Zealand',
				code: '053'
			}
		},
		currency: 'AUD',
		dialCode: '+61'
	},
	{
		name: 'Holy See',
		alpha2: 'VA',
		alpha3: 'VAT',
		numericCode: '336',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Southern Europe',
				code: '039'
			}
		},
		currency: 'EUR',
		dialCode: '+379'
	},
	{
		name: 'Honduras',
		alpha2: 'HN',
		alpha3: 'HND',
		numericCode: '340',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Central America',
				code: '013'
			}
		},
		currency: 'HNL',
		dialCode: '+504'
	},
	{
		name: 'Hong Kong',
		alpha2: 'HK',
		alpha3: 'HKG',
		numericCode: '344',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Eastern Asia',
				code: '030'
			}
		},
		currency: 'HKD',
		dialCode: '+852'
	},
	{
		name: 'Hungary',
		alpha2: 'HU',
		alpha3: 'HUN',
		numericCode: '348',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Eastern Europe',
				code: '151'
			}
		},
		currency: 'HUF',
		dialCode: '+36'
	},
	{
		name: 'Iceland',
		alpha2: 'IS',
		alpha3: 'ISL',
		numericCode: '352',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Northern Europe',
				code: '154'
			}
		},
		currency: 'ISK',
		dialCode: '+354'
	},
	{
		name: 'India',
		alpha2: 'IN',
		alpha3: 'IND',
		numericCode: '356',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Southern Asia',
				code: '034'
			}
		},
		currency: 'INR',
		dialCode: '+91'
	},
	{
		name: 'Indonesia',
		alpha2: 'ID',
		alpha3: 'IDN',
		numericCode: '360',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'South-eastern Asia',
				code: '035'
			}
		},
		currency: 'IDR',
		dialCode: '+62'
	},
	{
		name: 'Iran',
		alpha2: 'IR',
		alpha3: 'IRN',
		numericCode: '364',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Southern Asia',
				code: '034'
			}
		},
		currency: 'IRR',
		dialCode: '+98'
	},
	{
		name: 'Iraq',
		alpha2: 'IQ',
		alpha3: 'IRQ',
		numericCode: '368',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Western Asia',
				code: '145'
			}
		},
		currency: 'IQD',
		dialCode: '+964'
	},
	{
		name: 'Ireland',
		alpha2: 'IE',
		alpha3: 'IRL',
		numericCode: '372',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Northern Europe',
				code: '154'
			}
		},
		currency: 'EUR',
		dialCode: '+353'
	},
	{
		name: 'Isle of Man',
		alpha2: 'IM',
		alpha3: 'IMN',
		numericCode: '833',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Northern Europe',
				code: '154'
			}
		},
		currency: 'GBP',
		dialCode: '+44'
	},
	{
		name: 'Israel',
		alpha2: 'IL',
		alpha3: 'ISR',
		numericCode: '376',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Western Asia',
				code: '145'
			}
		},
		currency: 'ILS',
		dialCode: '+972'
	},
	{
		name: 'Italy',
		alpha2: 'IT',
		alpha3: 'ITA',
		numericCode: '380',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Southern Europe',
				code: '039'
			}
		},
		currency: 'EUR',
		dialCode: '+39'
	},
	{
		name: 'Jamaica',
		alpha2: 'JM',
		alpha3: 'JAM',
		numericCode: '388',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'JMD',
		dialCode: '+1876'
	},
	{
		name: 'Japan',
		alpha2: 'JP',
		alpha3: 'JPN',
		numericCode: '392',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Eastern Asia',
				code: '030'
			}
		},
		currency: 'JPY',
		dialCode: '+81'
	},
	{
		name: 'Jersey',
		alpha2: 'JE',
		alpha3: 'JEY',
		numericCode: '832',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Northern Europe',
				code: '154'
			},
			intermediateRegion: {
				name: 'Channel Islands',
				code: '830'
			}
		},
		currency: 'GBP',
		dialCode: '+44'
	},
	{
		name: 'Jordan',
		alpha2: 'JO',
		alpha3: 'JOR',
		numericCode: '400',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Western Asia',
				code: '145'
			}
		},
		currency: 'JOD',
		dialCode: '+962'
	},
	{
		name: 'Kazakhstan',
		alpha2: 'KZ',
		alpha3: 'KAZ',
		numericCode: '398',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Central Asia',
				code: '143'
			}
		},
		currency: 'KZT',
		dialCode: '+77'
	},
	{
		name: 'Kenya',
		alpha2: 'KE',
		alpha3: 'KEN',
		numericCode: '404',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'KES',
		dialCode: '+254'
	},
	{
		name: 'Kiribati',
		alpha2: 'KI',
		alpha3: 'KIR',
		numericCode: '296',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Micronesia',
				code: '057'
			}
		},
		currency: 'AUD',
		dialCode: '+686'
	},
	{
		name: 'North Korea',
		alpha2: 'KP',
		alpha3: 'PRK',
		numericCode: '408',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Eastern Asia',
				code: '030'
			}
		},
		currency: 'KPW',
		dialCode: '+850'
	},
	{
		name: 'South Korea',
		alpha2: 'KR',
		alpha3: 'KOR',
		numericCode: '410',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Eastern Asia',
				code: '030'
			}
		},
		currency: 'KRW',
		dialCode: '+82'
	},
	{
		name: 'Kuwait',
		alpha2: 'KW',
		alpha3: 'KWT',
		numericCode: '414',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Western Asia',
				code: '145'
			}
		},
		currency: 'KWD',
		dialCode: '+965'
	},
	{
		name: 'Kyrgyzstan',
		alpha2: 'KG',
		alpha3: 'KGZ',
		numericCode: '417',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Central Asia',
				code: '143'
			}
		},
		currency: 'KGS',
		dialCode: '+996'
	},
	{
		name: 'Laos',
		alpha2: 'LA',
		alpha3: 'LAO',
		numericCode: '418',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'South-eastern Asia',
				code: '035'
			}
		},
		currency: 'LAK',
		dialCode: '+856'
	},
	{
		name: 'Latvia',
		alpha2: 'LV',
		alpha3: 'LVA',
		numericCode: '428',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Northern Europe',
				code: '154'
			}
		},
		currency: 'EUR',
		dialCode: '+371'
	},
	{
		name: 'Lebanon',
		alpha2: 'LB',
		alpha3: 'LBN',
		numericCode: '422',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Western Asia',
				code: '145'
			}
		},
		currency: 'LBP',
		dialCode: '+961'
	},
	{
		name: 'Lesotho',
		alpha2: 'LS',
		alpha3: 'LSO',
		numericCode: '426',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Southern Africa',
				code: '018'
			}
		},
		currency: 'LSL',
		dialCode: '+266'
	},
	{
		name: 'Liberia',
		alpha2: 'LR',
		alpha3: 'LBR',
		numericCode: '430',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Western Africa',
				code: '011'
			}
		},
		currency: 'LRD',
		dialCode: '+231'
	},
	{
		name: 'Libya',
		alpha2: 'LY',
		alpha3: 'LBY',
		numericCode: '434',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Northern Africa',
				code: '015'
			}
		},
		currency: 'LYD',
		dialCode: '+218'
	},
	{
		name: 'Liechtenstein',
		alpha2: 'LI',
		alpha3: 'LIE',
		numericCode: '438',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Western Europe',
				code: '155'
			}
		},
		currency: 'CHF',
		dialCode: '+423'
	},
	{
		name: 'Lithuania',
		alpha2: 'LT',
		alpha3: 'LTU',
		numericCode: '440',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Northern Europe',
				code: '154'
			}
		},
		currency: 'EUR',
		dialCode: '+370'
	},
	{
		name: 'Luxembourg',
		alpha2: 'LU',
		alpha3: 'LUX',
		numericCode: '442',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Western Europe',
				code: '155'
			}
		},
		currency: 'EUR',
		dialCode: '+352'
	},
	{
		name: 'Macao',
		alpha2: 'MO',
		alpha3: 'MAC',
		numericCode: '446',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Eastern Asia',
				code: '030'
			}
		},
		currency: 'MOP',
		dialCode: '+853'
	},
	{
		name: 'Madagascar',
		alpha2: 'MG',
		alpha3: 'MDG',
		numericCode: '450',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'MGA',
		dialCode: '+261'
	},
	{
		name: 'Malawi',
		alpha2: 'MW',
		alpha3: 'MWI',
		numericCode: '454',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'MWK',
		dialCode: '+265'
	},
	{
		name: 'Malaysia',
		alpha2: 'MY',
		alpha3: 'MYS',
		numericCode: '458',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'South-eastern Asia',
				code: '035'
			}
		},
		currency: 'MYR',
		dialCode: '+60'
	},
	{
		name: 'Maldives',
		alpha2: 'MV',
		alpha3: 'MDV',
		numericCode: '462',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Southern Asia',
				code: '034'
			}
		},
		currency: 'MVR',
		dialCode: '+960'
	},
	{
		name: 'Mali',
		alpha2: 'ML',
		alpha3: 'MLI',
		numericCode: '466',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Western Africa',
				code: '011'
			}
		},
		currency: 'XOF',
		dialCode: '+223'
	},
	{
		name: 'Malta',
		alpha2: 'MT',
		alpha3: 'MLT',
		numericCode: '470',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Southern Europe',
				code: '039'
			}
		},
		currency: 'EUR',
		dialCode: '+356'
	},
	{
		name: 'Marshall Islands',
		alpha2: 'MH',
		alpha3: 'MHL',
		numericCode: '584',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Micronesia',
				code: '057'
			}
		},
		currency: 'USD',
		dialCode: '+692'
	},
	{
		name: 'Martinique',
		alpha2: 'MQ',
		alpha3: 'MTQ',
		numericCode: '474',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'EUR',
		dialCode: '+596'
	},
	{
		name: 'Mauritania',
		alpha2: 'MR',
		alpha3: 'MRT',
		numericCode: '478',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Western Africa',
				code: '011'
			}
		},
		currency: 'MRU',
		dialCode: '+222'
	},
	{
		name: 'Mauritius',
		alpha2: 'MU',
		alpha3: 'MUS',
		numericCode: '480',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'MUR',
		dialCode: '+230'
	},
	{
		name: 'Mayotte',
		alpha2: 'YT',
		alpha3: 'MYT',
		numericCode: '175',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'EUR',
		dialCode: '+262'
	},
	{
		name: 'Mexico',
		alpha2: 'MX',
		alpha3: 'MEX',
		numericCode: '484',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Central America',
				code: '013'
			}
		},
		currency: 'MXN',
		dialCode: '+52'
	},
	{
		name: 'Micronesia (Federated States of)',
		alpha2: 'FM',
		alpha3: 'FSM',
		numericCode: '583',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Micronesia',
				code: '057'
			}
		},
		currency: 'USD',
		dialCode: '+691'
	},
	{
		name: 'Moldova',
		alpha2: 'MD',
		alpha3: 'MDA',
		numericCode: '498',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Eastern Europe',
				code: '151'
			}
		},
		currency: 'MDL',
		dialCode: '+373'
	},
	{
		name: 'Monaco',
		alpha2: 'MC',
		alpha3: 'MCO',
		numericCode: '492',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Western Europe',
				code: '155'
			}
		},
		currency: 'EUR',
		dialCode: '+377'
	},
	{
		name: 'Mongolia',
		alpha2: 'MN',
		alpha3: 'MNG',
		numericCode: '496',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Eastern Asia',
				code: '030'
			}
		},
		currency: 'MNT',
		dialCode: '+976'
	},
	{
		name: 'Montenegro',
		alpha2: 'ME',
		alpha3: 'MNE',
		numericCode: '499',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Southern Europe',
				code: '039'
			}
		},
		currency: 'GBP',
		dialCode: '+382'
	},
	{
		name: 'Montserrat',
		alpha2: 'MS',
		alpha3: 'MSR',
		numericCode: '500',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'XCD',
		dialCode: '+1664'
	},
	{
		name: 'Morocco',
		alpha2: 'MA',
		alpha3: 'MAR',
		numericCode: '504',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Northern Africa',
				code: '015'
			}
		},
		currency: 'MAD',
		dialCode: '+212'
	},
	{
		name: 'Mozambique',
		alpha2: 'MZ',
		alpha3: 'MOZ',
		numericCode: '508',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'MZN',
		dialCode: '+258'
	},
	{
		name: 'Myanmar',
		alpha2: 'MM',
		alpha3: 'MMR',
		numericCode: '104',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'South-eastern Asia',
				code: '035'
			}
		},
		currency: 'MMK',
		dialCode: '+95'
	},
	{
		name: 'Namibia',
		alpha2: 'NA',
		alpha3: 'NAM',
		numericCode: '516',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Southern Africa',
				code: '018'
			}
		},
		currency: 'NAD',
		dialCode: '+264'
	},
	{
		name: 'Nauru',
		alpha2: 'NR',
		alpha3: 'NRU',
		numericCode: '520',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Micronesia',
				code: '057'
			}
		},
		currency: 'AUD',
		dialCode: '+674'
	},
	{
		name: 'Nepal',
		alpha2: 'NP',
		alpha3: 'NPL',
		numericCode: '524',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Southern Asia',
				code: '034'
			}
		},
		currency: 'NPR',
		dialCode: '+977'
	},
	{
		name: 'Netherlands',
		alpha2: 'NL',
		alpha3: 'NLD',
		numericCode: '528',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Western Europe',
				code: '155'
			}
		},
		currency: 'EUR',
		dialCode: '+31'
	},
	{
		name: 'New Caledonia',
		alpha2: 'NC',
		alpha3: 'NCL',
		numericCode: '540',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Melanesia',
				code: '054'
			}
		},
		currency: 'XPF',
		dialCode: '+687'
	},
	{
		name: 'New Zealand',
		alpha2: 'NZ',
		alpha3: 'NZL',
		numericCode: '554',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Australia and New Zealand',
				code: '053'
			}
		},
		currency: 'NZD',
		dialCode: '+64'
	},
	{
		name: 'Nicaragua',
		alpha2: 'NI',
		alpha3: 'NIC',
		numericCode: '558',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Central America',
				code: '013'
			}
		},
		currency: 'NIO',
		dialCode: '+505'
	},
	{
		name: 'Niger',
		alpha2: 'NE',
		alpha3: 'NER',
		numericCode: '562',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Western Africa',
				code: '011'
			}
		},
		currency: 'XOF',
		dialCode: '+227'
	},
	{
		name: 'Nigeria',
		alpha2: 'NG',
		alpha3: 'NGA',
		numericCode: '566',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Western Africa',
				code: '011'
			}
		},
		currency: 'NGN',
		dialCode: '+234'
	},
	{
		name: 'Niue',
		alpha2: 'NU',
		alpha3: 'NIU',
		numericCode: '570',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Polynesia',
				code: '061'
			}
		},
		currency: 'NZD',
		dialCode: '+683'
	},
	{
		name: 'Norfolk Island',
		alpha2: 'NF',
		alpha3: 'NFK',
		numericCode: '574',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Australia and New Zealand',
				code: '053'
			}
		},
		currency: 'AUD',
		dialCode: '+672'
	},
	{
		name: 'North Macedonia',
		alpha2: 'MK',
		alpha3: 'MKD',
		numericCode: '807',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Southern Europe',
				code: '039'
			}
		},
		currency: 'MKD',
		dialCode: '+389'
	},
	{
		name: 'Northern Mariana Islands',
		alpha2: 'MP',
		alpha3: 'MNP',
		numericCode: '580',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Micronesia',
				code: '057'
			}
		},
		currency: 'USD',
		dialCode: '+1670'
	},
	{
		name: 'Norway',
		alpha2: 'NO',
		alpha3: 'NOR',
		numericCode: '578',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Northern Europe',
				code: '154'
			}
		},
		currency: 'NOK',
		dialCode: '+47'
	},
	{
		name: 'Oman',
		alpha2: 'OM',
		alpha3: 'OMN',
		numericCode: '512',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Western Asia',
				code: '145'
			}
		},
		currency: 'OMR',
		dialCode: '+968'
	},
	{
		name: 'Pakistan',
		alpha2: 'PK',
		alpha3: 'PAK',
		numericCode: '586',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Southern Asia',
				code: '034'
			}
		},
		currency: 'PKR',
		dialCode: '+92'
	},
	{
		name: 'Palau',
		alpha2: 'PW',
		alpha3: 'PLW',
		numericCode: '585',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Micronesia',
				code: '057'
			}
		},
		currency: 'USD',
		dialCode: '+680'
	},
	// XXX:TODO What is Keeta's stance on the Isreali-Palestinian conflict?
	// {
	// 	name: 'Palestine',
	// 	alpha2: 'PS',
	// 	alpha3: 'PSE',
	// 	numericCode: '275',
	// 	region: {
	// 		primary: {
	// 			name: 'Asia',
	// 			code: '142'
	// 		},
	// 		subRegion: {
	// 			name: 'Western Asia',
	// 			code: '145'
	// 		}
	// 	},
	// 	currency: 'PSP',
	// 	dialCode: '+970'
	// },
	{
		name: 'Panama',
		alpha2: 'PA',
		alpha3: 'PAN',
		numericCode: '591',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Central America',
				code: '013'
			}
		},
		currency: 'PAB',
		dialCode: '+507'
	},
	{
		name: 'Papua New Guinea',
		alpha2: 'PG',
		alpha3: 'PNG',
		numericCode: '598',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Melanesia',
				code: '054'
			}
		},
		currency: 'PGK',
		dialCode: '+675'
	},
	{
		name: 'Paraguay',
		alpha2: 'PY',
		alpha3: 'PRY',
		numericCode: '600',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'South America',
				code: '005'
			}
		},
		currency: 'PYG',
		dialCode: '+595'
	},
	{
		name: 'Peru',
		alpha2: 'PE',
		alpha3: 'PER',
		numericCode: '604',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'South America',
				code: '005'
			}
		},
		currency: 'PEN',
		dialCode: '+51'
	},
	{
		name: 'Philippines',
		alpha2: 'PH',
		alpha3: 'PHL',
		numericCode: '608',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'South-eastern Asia',
				code: '035'
			}
		},
		currency: 'PHP',
		dialCode: '+63'
	},
	{
		name: 'Pitcairn',
		alpha2: 'PN',
		alpha3: 'PCN',
		numericCode: '612',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Polynesia',
				code: '061'
			}
		},
		currency: 'NZD',
		dialCode: '+872'
	},
	{
		name: 'Poland',
		alpha2: 'PL',
		alpha3: 'POL',
		numericCode: '616',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Eastern Europe',
				code: '151'
			}
		},
		currency: 'PLN',
		dialCode: '+48'
	},
	{
		name: 'Portugal',
		alpha2: 'PT',
		alpha3: 'PRT',
		numericCode: '620',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Southern Europe',
				code: '039'
			}
		},
		currency: 'EUR',
		dialCode: '+351'
	},
	{
		name: 'Puerto Rico',
		alpha2: 'PR',
		alpha3: 'PRI',
		numericCode: '630',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'USD',
		dialCode: '+1939'
	},
	{
		name: 'Qatar',
		alpha2: 'QA',
		alpha3: 'QAT',
		numericCode: '634',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Western Asia',
				code: '145'
			}
		},
		currency: 'QAR',
		dialCode: '+974'
	},
	{
		name: 'Réunion',
		alpha2: 'RE',
		alpha3: 'REU',
		numericCode: '638',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'EUR',
		dialCode: '+262'
	},
	{
		name: 'Romania',
		alpha2: 'RO',
		alpha3: 'ROU',
		numericCode: '642',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Eastern Europe',
				code: '151'
			}
		},
		currency: 'RON',
		dialCode: '+40'
	},
	{
		name: 'Russian Federation',
		alpha2: 'RU',
		alpha3: 'RUS',
		numericCode: '643',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Eastern Europe',
				code: '151'
			}
		},
		currency: 'RUB',
		dialCode: '+7'
	},
	{
		name: 'Rwanda',
		alpha2: 'RW',
		alpha3: 'RWA',
		numericCode: '646',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'RWF',
		dialCode: '+250'
	},
	{
		name: 'Saint Barthélemy',
		alpha2: 'BL',
		alpha3: 'BLM',
		numericCode: '652',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'EUR',
		dialCode: '+590'
	},
	{
		name: 'Saint Helena',
		alpha2: 'SH',
		alpha3: 'SHN',
		numericCode: '654',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Western Africa',
				code: '011'
			}
		},
		currency: 'SHP',
		dialCode: '+290'
	},
	{
		name: 'Saint Kitts and Nevis',
		alpha2: 'KN',
		alpha3: 'KNA',
		numericCode: '659',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'XCD',
		dialCode: '+1869'
	},
	{
		name: 'Saint Lucia',
		alpha2: 'LC',
		alpha3: 'LCA',
		numericCode: '662',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'XCD',
		dialCode: '+1758'
	},
	{
		name: 'Saint Martin (French)',
		alpha2: 'MF',
		alpha3: 'MAF',
		numericCode: '663',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'ANG',
		dialCode: '+590'
	},
	{
		name: 'Saint Pierre and Miquelon',
		alpha2: 'PM',
		alpha3: 'SPM',
		numericCode: '666',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Northern America',
				code: '021'
			}
		},
		currency: 'EUR',
		dialCode: '+508'
	},
	{
		name: 'Saint Vincent and the Grenadines',
		alpha2: 'VC',
		alpha3: 'VCT',
		numericCode: '670',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'XCD',
		dialCode: '+1784'
	},
	{
		name: 'Samoa',
		alpha2: 'WS',
		alpha3: 'WSM',
		numericCode: '882',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Polynesia',
				code: '061'
			}
		},
		currency: 'WST',
		dialCode: '+685'
	},
	{
		name: 'San Marino',
		alpha2: 'SM',
		alpha3: 'SMR',
		numericCode: '674',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Southern Europe',
				code: '039'
			}
		},
		currency: 'EUR',
		dialCode: '+378'
	},
	{
		name: 'Sao Tome and Principe',
		alpha2: 'ST',
		alpha3: 'STP',
		numericCode: '678',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Middle Africa',
				code: '017'
			}
		},
		currency: 'STN',
		dialCode: '+239'
	},
	{
		name: 'Saudi Arabia',
		alpha2: 'SA',
		alpha3: 'SAU',
		numericCode: '682',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Western Asia',
				code: '145'
			}
		},
		currency: 'SAR',
		dialCode: '+966'
	},
	{
		name: 'Senegal',
		alpha2: 'SN',
		alpha3: 'SEN',
		numericCode: '686',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Western Africa',
				code: '011'
			}
		},
		currency: 'XOF',
		dialCode: '+221'
	},
	{
		name: 'Serbia',
		alpha2: 'RS',
		alpha3: 'SRB',
		numericCode: '688',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Southern Europe',
				code: '039'
			}
		},
		currency: 'RSD',
		dialCode: '+381'
	},
	{
		name: 'Seychelles',
		alpha2: 'SC',
		alpha3: 'SYC',
		numericCode: '690',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'SCR',
		dialCode: '+248'
	},
	{
		name: 'Sierra Leone',
		alpha2: 'SL',
		alpha3: 'SLE',
		numericCode: '694',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Western Africa',
				code: '011'
			}
		},
		currency: 'SLL',
		dialCode: '+232'
	},
	{
		name: 'Singapore',
		alpha2: 'SG',
		alpha3: 'SGP',
		numericCode: '702',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'South-eastern Asia',
				code: '035'
			}
		},
		currency: 'SGD',
		dialCode: '+65'
	},
	{
		name: 'Sint Maarten (Dutch)',
		alpha2: 'SX',
		alpha3: 'SXM',
		numericCode: '534',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'ANG',
		dialCode: '+590'
	},
	{
		name: 'Slovakia',
		alpha2: 'SK',
		alpha3: 'SVK',
		numericCode: '703',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Eastern Europe',
				code: '151'
			}
		},
		currency: 'EUR',
		dialCode: '+421'
	},
	{
		name: 'Slovenia',
		alpha2: 'SI',
		alpha3: 'SVN',
		numericCode: '705',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Southern Europe',
				code: '039'
			}
		},
		currency: 'EUR',
		dialCode: '+386'
	},
	{
		name: 'Solomon Islands',
		alpha2: 'SB',
		alpha3: 'SLB',
		numericCode: '090',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Melanesia',
				code: '054'
			}
		},
		currency: 'SBD',
		dialCode: '+677'
	},
	{
		name: 'Somalia',
		alpha2: 'SO',
		alpha3: 'SOM',
		numericCode: '706',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'SOS',
		dialCode: '+252'
	},
	{
		name: 'South Africa',
		alpha2: 'ZA',
		alpha3: 'ZAF',
		numericCode: '710',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Southern Africa',
				code: '018'
			}
		},
		currency: 'ZAR',
		dialCode: '+27'
	},
	{
		name: 'South Georgia and the South Sandwich Islands',
		alpha2: 'GS',
		alpha3: 'SGS',
		numericCode: '239',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'South America',
				code: '005'
			}
		},
		currency: 'GBP',
		dialCode: '+500'
	},
	{
		name: 'South Sudan',
		alpha2: 'SS',
		alpha3: 'SSD',
		numericCode: '728',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'SSP',
		dialCode: '+211'
	},
	{
		name: 'Spain',
		alpha2: 'ES',
		alpha3: 'ESP',
		numericCode: '724',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Southern Europe',
				code: '039'
			}
		},
		currency: 'EUR',
		dialCode: '+34'
	},
	{
		name: 'Sri Lanka',
		alpha2: 'LK',
		alpha3: 'LKA',
		numericCode: '144',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Southern Asia',
				code: '034'
			}
		},
		currency: 'LKR',
		dialCode: '+94'
	},
	{
		name: 'Sudan',
		alpha2: 'SD',
		alpha3: 'SDN',
		numericCode: '729',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Northern Africa',
				code: '015'
			}
		},
		currency: 'SDG',
		dialCode: '+249'
	},
	{
		name: 'Suriname',
		alpha2: 'SR',
		alpha3: 'SUR',
		numericCode: '740',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'South America',
				code: '005'
			}
		},
		currency: 'SRD',
		dialCode: '+597'
	},
	{
		name: 'Svalbard and Jan Mayen',
		alpha2: 'SJ',
		alpha3: 'SJM',
		numericCode: '744',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Northern Europe',
				code: '154'
			}
		},
		currency: 'NOK',
		dialCode: '+47'
	},
	{
		name: 'Sweden',
		alpha2: 'SE',
		alpha3: 'SWE',
		numericCode: '752',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Northern Europe',
				code: '154'
			}
		},
		currency: 'SEK',
		dialCode: '+46'
	},
	{
		name: 'Switzerland',
		alpha2: 'CH',
		alpha3: 'CHE',
		numericCode: '756',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Western Europe',
				code: '155'
			}
		},
		currency: 'CHF',
		dialCode: '+41'
	},
	{
		name: 'Syria',
		alpha2: 'SY',
		alpha3: 'SYR',
		numericCode: '760',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Western Asia',
				code: '145'
			}
		},
		currency: 'SYP',
		dialCode: '+963'
	},
	{
		name: 'Taiwan',
		alpha2: 'TW',
		alpha3: 'TWN',
		numericCode: '158',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Eastern Asia',
				code: '030'
			}
		},
		currency: 'TWD',
		dialCode: '+886'
	},
	{
		name: 'Tajikistan',
		alpha2: 'TJ',
		alpha3: 'TJK',
		numericCode: '762',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Central Asia',
				code: '143'
			}
		},
		currency: 'TJS',
		dialCode: '+992'
	},
	{
		name: 'Tanzania',
		alpha2: 'TZ',
		alpha3: 'TZA',
		numericCode: '834',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'TZS',
		dialCode: '+255'
	},
	{
		name: 'Thailand',
		alpha2: 'TH',
		alpha3: 'THA',
		numericCode: '764',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'South-eastern Asia',
				code: '035'
			}
		},
		currency: 'THB',
		dialCode: '+66'
	},
	{
		name: 'Timor-Leste',
		alpha2: 'TL',
		alpha3: 'TLS',
		numericCode: '626',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'South-eastern Asia',
				code: '035'
			}
		},
		currency: 'USD',
		dialCode: '+670'
	},
	{
		name: 'Togo',
		alpha2: 'TG',
		alpha3: 'TGO',
		numericCode: '768',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Western Africa',
				code: '011'
			}
		},
		currency: 'XOF',
		dialCode: '+228'
	},
	{
		name: 'Tokelau',
		alpha2: 'TK',
		alpha3: 'TKL',
		numericCode: '772',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Polynesia',
				code: '061'
			}
		},
		currency: 'NZD',
		dialCode: '+690'
	},
	{
		name: 'Tonga',
		alpha2: 'TO',
		alpha3: 'TON',
		numericCode: '776',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Polynesia',
				code: '061'
			}
		},
		currency: 'TOP',
		dialCode: '+676'
	},
	{
		name: 'Trinidad and Tobago',
		alpha2: 'TT',
		alpha3: 'TTO',
		numericCode: '780',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'TTD',
		dialCode: '+1868'
	},
	{
		name: 'Tunisia',
		alpha2: 'TN',
		alpha3: 'TUN',
		numericCode: '788',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Northern Africa',
				code: '015'
			}
		},
		currency: 'TND',
		dialCode: '+216'
	},
	{
		name: 'Turkey',
		alpha2: 'TR',
		alpha3: 'TUR',
		numericCode: '792',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Western Asia',
				code: '145'
			}
		},
		currency: 'TRY',
		dialCode: '+90'
	},
	{
		name: 'Turkmenistan',
		alpha2: 'TM',
		alpha3: 'TKM',
		numericCode: '795',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Central Asia',
				code: '143'
			}
		},
		currency: 'TMT',
		dialCode: '+993'
	},
	{
		name: 'Turks and Caicos Islands',
		alpha2: 'TC',
		alpha3: 'TCA',
		numericCode: '796',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'USD',
		dialCode: '+1649'
	},
	{
		name: 'Tuvalu',
		alpha2: 'TV',
		alpha3: 'TUV',
		numericCode: '798',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Polynesia',
				code: '061'
			}
		},
		currency: 'AUD',
		dialCode: '+688'
	},
	{
		name: 'Uganda',
		alpha2: 'UG',
		alpha3: 'UGA',
		numericCode: '800',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'UGX',
		dialCode: '+256'
	},
	{
		name: 'Ukraine',
		alpha2: 'UA',
		alpha3: 'UKR',
		numericCode: '804',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Eastern Europe',
				code: '151'
			}
		},
		currency: 'UAH',
		dialCode: '+380'
	},
	{
		name: 'United Arab Emirates',
		alpha2: 'AE',
		alpha3: 'ARE',
		numericCode: '784',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Western Asia',
				code: '145'
			}
		},
		currency: 'AED',
		dialCode: '+971'
	},
	{
		name: 'United Kingdom',
		alpha2: 'GB',
		alpha3: 'GBR',
		numericCode: '826',
		region: {
			primary: {
				name: 'Europe',
				code: '150'
			},
			subRegion: {
				name: 'Northern Europe',
				code: '154'
			}
		},
		currency: 'GBP',
		dialCode: '+44'
	},
	{
		name: 'United States of America',
		alpha2: 'US',
		alpha3: 'USA',
		numericCode: '840',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Northern America',
				code: '021'
			}
		},
		currency: 'USD',
		dialCode: '+1'
	},
	{
		name: 'United States Minor Outlying Islands',
		alpha2: 'UM',
		alpha3: 'UMI',
		numericCode: '581',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Micronesia',
				code: '057'
			}
		},
		currency: 'USD',
		dialCode: '+1'
	},
	{
		name: 'Uruguay',
		alpha2: 'UY',
		alpha3: 'URY',
		numericCode: '858',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'South America',
				code: '005'
			}
		},
		currency: 'UYU',
		dialCode: '+598'
	},
	{
		name: 'Uzbekistan',
		alpha2: 'UZ',
		alpha3: 'UZB',
		numericCode: '860',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Central Asia',
				code: '143'
			}
		},
		currency: 'UZS',
		dialCode: '+998'
	},
	{
		name: 'Vanuatu',
		alpha2: 'VU',
		alpha3: 'VUT',
		numericCode: '548',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Melanesia',
				code: '054'
			}
		},
		currency: 'VUV',
		dialCode: '+678'
	},
	{
		name: 'Venezuela',
		alpha2: 'VE',
		alpha3: 'VEN',
		numericCode: '862',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'South America',
				code: '005'
			}
		},
		currency: 'VES',
		dialCode: '+58'
	},
	{
		name: 'Vietnam',
		alpha2: 'VN',
		alpha3: 'VNM',
		numericCode: '704',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'South-eastern Asia',
				code: '035'
			}
		},
		currency: 'VND',
		dialCode: '+84'
	},
	{
		name: 'Virgin Islands (British)',
		alpha2: 'VG',
		alpha3: 'VGB',
		numericCode: '092',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'USD',
		dialCode: '+1284'
	},
	{
		name: 'Virgin Islands (U.S.)',
		alpha2: 'VI',
		alpha3: 'VIR',
		numericCode: '850',
		region: {
			primary: {
				name: 'Americas',
				code: '019'
			},
			subRegion: {
				name: 'Latin America and the Caribbean',
				code: '419'
			},
			intermediateRegion: {
				name: 'Caribbean',
				code: '029'
			}
		},
		currency: 'USD',
		dialCode: '+1340'
	},
	{
		name: 'Wallis and Futuna',
		alpha2: 'WF',
		alpha3: 'WLF',
		numericCode: '876',
		region: {
			primary: {
				name: 'Oceania',
				code: '009'
			},
			subRegion: {
				name: 'Polynesia',
				code: '061'
			}
		},
		currency: 'XPF',
		dialCode: '+681'
	},
	{
		name: 'Western Sahara',
		alpha2: 'EH',
		alpha3: 'ESH',
		numericCode: '732',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Northern Africa',
				code: '015'
			}
		},
		currency: 'MAD',
		dialCode: '+212'
	},
	{
		name: 'Yemen',
		alpha2: 'YE',
		alpha3: 'YEM',
		numericCode: '887',
		region: {
			primary: {
				name: 'Asia',
				code: '142'
			},
			subRegion: {
				name: 'Western Asia',
				code: '145'
			}
		},
		currency: 'YER',
		dialCode: '+967'
	},
	{
		name: 'Zambia',
		alpha2: 'ZM',
		alpha3: 'ZMB',
		numericCode: '894',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'ZMW',
		dialCode: '+260'
	},
	{
		name: 'Zimbabwe',
		alpha2: 'ZW',
		alpha3: 'ZWE',
		numericCode: '716',
		region: {
			primary: {
				name: 'Africa',
				code: '002'
			},
			subRegion: {
				name: 'Sub-Saharan Africa',
				code: '202'
			},
			intermediateRegion: {
				name: 'Eastern Africa',
				code: '014'
			}
		},
		currency: 'ZWL',
		dialCode: '+263'
	}
] as const;

export default countries;

/**
 * ISO 3166-1 alpha-2 codes
 */
export type ISOCountryCode = typeof countries[any]['alpha2'];
/**
 * ISO 3166-1 numeric codes
 */
export type ISOCountryNumber = typeof countries[any]['numericCode'];
/**
 * ISO 3166-1 alpha-3 codes
 */
export type LongCountryCode = typeof countries[any]['alpha3'];
