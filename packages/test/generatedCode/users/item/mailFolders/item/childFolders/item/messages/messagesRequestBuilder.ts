// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
import { type MessageCollectionResponse } from '../../../../../../../models/';
import { createMessageFromDiscriminatorValue, deserializeIntoMessage, serializeMessage, type Message } from '../../../../../../../models/message';
import { createMessageCollectionResponseFromDiscriminatorValue } from '../../../../../../../models/messageCollectionResponse';
import { type ODataError } from '../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { MessageItemRequestBuilder } from './item/messageItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestConfiguration, type RequestOption } from '@microsoft/kiota-abstractions';

export interface MessagesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages
 */
export class MessagesRequestBuilder extends BaseRequestBuilder {
    /**
     * The Count property
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the ApiSdk.users.item.mailFolders.item.childFolders.item.messages.item collection
     * @param messageId The unique identifier of message
     * @returns a MessageItemRequestBuilder
     */
    public byMessageId(messageId: string) : MessageItemRequestBuilder {
        if(!messageId) throw new Error("messageId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["message%2Did"] = messageId
        return new MessageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MessagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messages{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get all the messages in the specified user's mailbox, or those messages in a specified folder in the mailbox. This API is available in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MessageCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/mailfolder-list-messages?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RequestConfiguration<MessagesRequestBuilderGetQueryParameters> | undefined) : Promise<MessageCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MessageCollectionResponse>(requestInfo, createMessageCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Use this API to create a new Message in a mailfolder. This API is available in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Message
     * @see {@link https://learn.microsoft.com/graph/api/mailfolder-post-messages?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Message, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Message | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Message>(requestInfo, createMessageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get all the messages in the specified user's mailbox, or those messages in a specified folder in the mailbox. This API is available in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RequestConfiguration<MessagesRequestBuilderGetQueryParameters> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation(HttpMethod.GET, this.urlTemplate, this.pathParameters);
        requestInfo.configure(requestConfiguration, messagesRequestBuilderGetQueryParametersMapper);
        requestInfo.headers.tryAdd("Accept", "application/json");
        return requestInfo;
    };
    /**
     * Use this API to create a new Message in a mailfolder. This API is available in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Message, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation(HttpMethod.POST, this.urlTemplate, this.pathParameters);
        requestInfo.configure(requestConfiguration);
        requestInfo.headers.tryAdd("Accept", "application/json");
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeMessage);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a messagesRequestBuilder
     */
    public withUrl(rawUrl: string) : MessagesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new MessagesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
const messagesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
// tslint:enable
// eslint-enable
