/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Mutation:{
		userSignIn:{

		}
	},
	Query:{
		verifyGoogleToken:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	User:{
		id:"ID",
		firstName:"String",
		lastName:"String",
		email:"String",
		profileImageURL:"String"
	},
	Mutation:{
		userSignIn:"ID"
	},
	Query:{
		verifyGoogleToken:"String"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}