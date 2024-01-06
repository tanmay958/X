/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	userSingInPayload:{

	},
	createTweetData:{

	},
	Mutation:{
		userSignIn:{
			payload:"userSingInPayload"
		},
		createTweet:{
			payload:"createTweetData"
		}
	},
	Query:{
		verifyGoogleToken:{

		},
		getUserProfile:{

		},
		getPreSignUrl:{

		}
	}
}

export const ReturnTypes: Record<string,any> = {
	User:{
		id:"ID",
		firstName:"String",
		lastName:"String",
		email:"String",
		profileImageURL:"String",
		Tweets:"Tweet"
	},
	Tweet:{
		id:"ID",
		content:"String",
		imageUrl:"String",
		author:"User"
	},
	Mutation:{
		userSignIn:"ID",
		createTweet:"Tweet"
	},
	Query:{
		verifyGoogleToken:"String",
		getUserProfile:"User",
		getAllTweets:"Tweet",
		getPreSignUrl:"String"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}