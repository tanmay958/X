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
		follow:{

		},
		unfollow:{

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
		isFollowing:{

		},
		getAllFollower:{

		},
		getAllFollowing:{

		},
		recommend:{

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
	FollowResponse:{
		success:"Boolean",
		message:"String"
	},
	UnFollowResponse:{
		success:"Boolean",
		message:"String"
	},
	IsFollowing:{
		value:"Boolean",
		message:"String"
	},
	Tweet:{
		id:"ID",
		content:"String",
		imageUrl:"String",
		author:"User"
	},
	Mutation:{
		userSignIn:"ID",
		follow:"FollowResponse",
		unfollow:"UnFollowResponse",
		createTweet:"Tweet"
	},
	Query:{
		verifyGoogleToken:"String",
		getUserProfile:"User",
		isFollowing:"IsFollowing",
		getAllFollower:"User",
		getAllFollowing:"User",
		recommend:"User",
		getAllTweets:"Tweet",
		getPreSignUrl:"String"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}