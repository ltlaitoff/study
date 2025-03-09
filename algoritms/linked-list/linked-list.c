#include <assert.h>
#include <stdlib.h>
#include <stdio.h>

struct LinkedNode  {
	int value;
	struct LinkedNode* next;
};

struct LinkedList{
	struct LinkedNode* head;
	struct LinkedNode* tail;
};

void initialize(struct LinkedList* list) {
	list->head = NULL;
	list->tail = NULL;
}

void add(struct LinkedList* list, int value) {
	struct LinkedNode* item = malloc(sizeof(struct LinkedNode));
	item->value = value;

	if (list->head == NULL) {
		list->head = item;

		assert(list->tail == NULL);

		list->tail = item;
		return;
	}

	assert(list->tail != NULL);
	assert(list->tail->next == NULL);

	list->tail->next = item;
	list->tail = item;
}

void show(struct LinkedNode* node, int index) {

	printf("Item %d has value %3d and exists by address %p\n", index, node->value, &node);

	if (node->next == NULL) {
		return;
	}

	show(node->next, index + 1);
}

int main() {
	struct LinkedList* list;

	initialize(list);

	add(list, -10);
	add(list, 50);
	add(list, 100);

	show(list->head, 0);

	return 0;
}
